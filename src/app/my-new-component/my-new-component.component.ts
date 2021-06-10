import { Component, OnInit } from '@angular/core';
import{Computer} from '../computer.model';
@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss']
})
export class MyNewComponentComponent implements OnInit {
  constructor() { }
  computerList:Computer[] = [
    new Computer(1,'Aspire XD14E','Acer',850,'Laptop',2,'Ryzen 7 4400U',16,'1000','Vega 10','Nvidia 1650ti',"https://cdn.pocket-lint.com/r/s/1200x/assets/images/150582-laptops-review-acer-swift-3-2020-review-images-image1-fjjwkmhxey.jpg"),
    // new Computer(2,'CA41B','Asus',350,'Laptop',2,'Intel i3 10th',4,'128','Iris','/',""),
    // new Computer(3,'F314X','ACER',650,'Laptop',6,'Ryzen 5 4400U',8,'256','Vega 8','/',""),
    // new Computer(4,'XD14E','Lenovo',1150,'Laptop',3,'Intel i7 11th',16,'512','Iris X','Nvidia 3060',""),
  ]

  // Mappe di valorizazzione componenti
  ryzenCPUPoints = new Map([
    ["Ryzen 3 2400U",2],
    ["Ryzen 3 3400U",3],
    ["Ryzen 3 4400U",4],
    ["Ryzen 5 2400U",5],
    ["Ryzen 5 3400U",6],
    ["Ryzen 5 4400U",7],
    ["Ryzen 7 2400U",8],
    ["Ryzen 7 3400U",9],
    ["Ryzen 7 4400U",10],
  ]);
    ryzenGPUPoints = new Map([
    ["Vega 8",1],
    ["Vega 10",2],
  ]);
    intelCPUPoints = new Map([
    ["Intel i3 10th",2],
    ["Intel i3 11th",3],
    ["Intel i5 10th",5],
    ["Intel i5 11th",6],
    ["Intel i7 10th",8],
    ["Intel i7 11th",9],
  ]);
    intelGPUPoints = new Map([
    ["Iris",1],
    ["Iris X",2],
  ]);
    ramPoints = new Map([
    ["4",0.5],
    ["8",3],
    ["16",5],
    ["32",8],
  ]);
    ssdPoints = new Map([
    ["256",1],
    ["512",3],
    ["1000",5],
  ]);
    gpuPoints = new Map([
    ["1650ti",4],
    ["2060",8],
    ["2070",10],
    ["2080",11],
    ["3060",12],
    ["3070",13],
    ["3080",15],
  ]);   

  getValue(id:number):number[]{
    let valore:number[]=new Array();

    if(this.computerList[id].cpu.includes('Ryzen')){
      valore[0] =(this.ryzenCPUPoints.get(this.computerList[id].cpu) || 0) + (this.ramPoints.get(this.computerList[id].ram.toString()) || 0) + (this.ssdPoints.get(this.computerList[id].ssd) || 0);
      valore[1]= this.ryzenGPUPoints.get(this.computerList[id].integrated) || 0;

      if(this.computerList[id].gpu.includes('Nvidia')){
          valore[1]= valore[1] +(this.gpuPoints.get(this.computerList[id].gpu.replace('Nvidia ','')) || 0);
      }

      return valore;
    }
    else{
      valore[0]=(this.intelCPUPoints.get(this.computerList[id].cpu) || 0) + (this.ramPoints.get(this.computerList[id].ram.toString()) || 0) + (this.ssdPoints.get(this.computerList[id].ssd) || 0);
      valore[1]= (this.intelGPUPoints.get(this.computerList[id].integrated) || 0)

      if(this.computerList[id].gpu.includes('Nvidia')){
          valore[1]= valore[1] + (this.gpuPoints.get(this.computerList[id].gpu.replace('Nvidia ','')) || 0);
      }

      return valore;
    }
    return valore;
  }

  ngOnInit(): void {
  }

}
