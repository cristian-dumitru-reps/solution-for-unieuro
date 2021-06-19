import { Component, Input, OnInit } from '@angular/core';
import { Computer } from '../computer.model';
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('cmp')
  computer=new Computer(1,'Aspire XD14E','Acer',850,'Laptop',2,'Ryzen 7 4400U',16,'1000','Vega 10','Nvidia 1650ti','https://cdn.pocket-lint.com/r/s/1200x/assets/images/150582-laptops-review-acer-swift-3-2020-review-images-image1-fjjwkmhxey.jpg');
  constructor() {
  }
  ngOnInit(): void {
    computer:Computer;

  }

  /*
  1)Email,Web surfing, Youtube, Film. (Uso casalingo) -> 7 punti = 60% / 9 punti = 100%  
  2)Word, (Uso scolastico/ufficio) -> 9 punti = 60% / 11 punti = 100%;
  3)Grafico medio (Uso grafico)
  4)Gaming, Modellazione 3D (Uso professionale) ->14 60% / 20 -> 100% + boost scheda video
  */
  gradientList: any[] = [
    'linear-gradient(315deg, #b02e0c 0%, #eb4511 74%)',
    'linear-gradient(315deg, #fe5858 0%, #ee9617 74%)',
    'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
  ];

  // Mappe di valorizazzione componenti
  ryzenCPUPoints = new Map([
    ['Ryzen 3 2400U', 2],
    ['Ryzen 3 3400U', 3],
    ['Ryzen 3 4400U', 4],
    ['Ryzen 5 2400U', 5],
    ['Ryzen 5 3400U', 6],
    ['Ryzen 5 4400U', 7],
    ['Ryzen 7 2400U', 8],
    ['Ryzen 7 3400U', 9],
    ['Ryzen 7 4400U', 10],
  ]);
  ryzenGPUPoints = new Map([
    ['Vega 8', 1],
    ['Vega 10', 2],
  ]);
  intelCPUPoints = new Map([
    ['Intel i3 10th', 2],
    ['Intel i3 11th', 4],
    ['Intel i5 10th', 5],
    ['Intel i5 11th', 6],
    ['Intel i7 10th', 8],
    ['Intel i7 11th', 9],
  ]);
  intelGPUPoints = new Map([
    ['Iris', 1],
    ['Iris X', 2],
  ]);
  ramPoints = new Map([
    ['4', 0.5],
    ['8', 3],
    ['16', 5],
    ['32', 8],
  ]);
  ssdPoints = new Map([
    ['256', 1],
    ['512', 2],
    ['1000', 3],
  ]);
  gpuPoints = new Map([
    ['1650ti', 4],
    ['2060', 8],
    ['2070', 10],
    ['2080', 11],
    ['3060', 12],
    ['3070', 13],
    ['3080', 15],
  ]);

  getValue(): number[] {
    let valore: number[] = new Array();
    // if(this.computer){
    if (this.computer.cpu.includes('Ryzen')) {
      valore[0] =
        (this.ryzenCPUPoints.get(this.computer.cpu) || 0) +
        (this.ramPoints.get(this.computer.ram.toString()) || 0) +
        (this.ssdPoints.get(this.computer.ssd) || 0);
      valore[1] =
        this.ryzenGPUPoints.get(this.computer.integrated) || 0;

      if (this.computer.gpu.includes('Nvidia')) {
        valore[1] =
          valore[1] +
          (this.gpuPoints.get(
            this.computer.gpu.replace('Nvidia ', '')
          ) || 0);
      }

      return valore;
    } else {
      valore[0] =
        (this.intelCPUPoints.get(this.computer.cpu) || 0) +
        (this.ramPoints.get(this.computer.ram.toString()) || 0) +
        (this.ssdPoints.get(this.computer.ssd) || 0);
      valore[1] =
        this.intelGPUPoints.get(this.computer.integrated) || 0;

      if (this.computer.gpu.includes('Nvidia')) {
        valore[1] =
          valore[1] +
          (this.gpuPoints.get(
            this.computer.gpu.replace('Nvidia ', '')
          ) || 0);
      }

    }
    return valore;
  
  }

  getPercentage(
    number_one: number,
    number_two: number,
    type: string,
    video?: number
  ): number {
    if (type == 'normal' || type == 'medium') {
      let percentuale = (number_one / number_two) * 100;
      if (percentuale > 100) percentuale = 100;
      return percentuale;
    } else {
      let percentuale = ((number_one / number_two) * 100) / 2;
      if (video) percentuale = percentuale + (video / 15) * 100;
      if (percentuale > 100) percentuale = 100;
      return percentuale;
    }
  }
  getPercentagePixel(
    number_one: number,
    number_two: number,
    type: string,
    video?: number
  ): number {
    let percentuale;
    if (type == 'normal' || type == 'medium') {
      percentuale = (number_one / number_two) * 100;
    } else {
      percentuale = ((number_one / number_two) * 100) / 2;
      if (video) percentuale = percentuale + (video / 15) * 100;
    }
    let percentualepx = (percentuale * 210) / 100;
    if (percentualepx > 210) {
      percentualepx = 210;
    }
    return percentualepx;
  }

  getGradient(valore:number):any{
    if(valore >= 0 && valore < 94)
      return this.gradientList[0];
    if(valore >= 94 && valore < 189)
      return this.gradientList[1]; 
    if(valore >= 189 )
      return this.gradientList[2];   
  }

  getPdf(id:any){
    console.log('Richiesto pdf per:',id);
  }
}
