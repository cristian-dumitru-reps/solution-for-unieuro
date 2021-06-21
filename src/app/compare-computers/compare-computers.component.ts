import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CardComponent } from '../card/card-component.component';
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-compare-computers',
  templateUrl: './compare-computers.component.html',
  styleUrls: ['./compare-computers.component.scss']
})
export class CompareComputersComponent implements OnInit {
  puntoVendita:any;
  primoComputer = new FormControl();
  secondoComputer = new FormControl();
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.puntoVendita = params.get("puntoVendita");
    });
  }
  computerList:Computer[] = [
    new Computer(1,'Acer XD14E','Acer',850,'Laptop',2,'Ryzen 7 4400U',16,'1000','Vega 10','Nvidia 1650ti',"https://cdn.pocket-lint.com/r/s/1200x/assets/images/150582-laptops-review-acer-swift-3-2020-review-images-image1-fjjwkmhxey.jpg"),
    new Computer(2,'Asus CA41B','Asus',350,'Laptop',2,'Intel i3 10th',4,'128','Iris','/',"https://gizchina.it/wp-content/uploads/2020/11/Recensione-Asus-Rog-G14-gaming-pc-notebook-portatile-prezzo-prestazioni-fotocamera-display-italia-test-software-benchmark-fps-games-details-3-scaled.jpg"),
    new Computer(3,'Acer F314X','ACER',650,'Laptop',6,'Ryzen 5 4400U',8,'256','Vega 8','/',"https://www.cnet.com/a/img/onBDX7K6XyWXQfKOSNeeSjwMvs8=/1200x630/2020/05/06/02bb6326-276f-4d0b-a064-54ab76365a7c/acer-aspire-1-2020-0013.jpg"),
    new Computer(4,'Lenovo XD14E','Lenovo',1150,'Laptop',3,'Intel i7 11th',16,'512','Iris X','Nvidia 3060',"https://www.hwupgrade.it/articoli/5816/240.jpg")
  ]
  
  options: string[] = ['Aspire XD14E','Asus CA41B','Acer F314X','Lenovo XD14E'];
  firstComputer = -1;
  secondComputer = -1;
  filteredOptions: Observable<string[]> | undefined;
  filteredSecondOptions: Observable<string[]> | undefined;
  
  ngOnInit() {
    this.filteredOptions = this.primoComputer.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filteredSecondOptions = this.secondoComputer.valueChanges.pipe(startWith(''),
      map(value => this._secondFilter(value))
    );
    // console.log(this.primoComputer.value);
  }

  private _filter(value: string): string[] {
    this.firstComputer= this.options.indexOf(value);
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _secondFilter(value: string): string[] {
    this.secondComputer= this.options.indexOf(value);
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  
  compare(computer1:Computer,computer2:Computer){
    console.log('Hai scelto di confrontare',computer1," e ",computer2);
  }

}
