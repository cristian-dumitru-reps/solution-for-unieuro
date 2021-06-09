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
    new Computer(1,'XD14E','Acer',850,'Laptop',5,'Ryzen 7 4200U',16,'M2 512gb','AMD','Nvidia 1650ti',""),
    new Computer(2,'CA41B','Asus',350,'Laptop',2,'Intel i3 10650',4,'M2 128gb','Iris','/',""),
    new Computer(3,'F314X','ACER',650,'Laptop',6,'Ryzen 5 4200U',8,'M2 256gb','AMD','/',""),
    new Computer(4,'XD14E','Lenovo',1150,'Laptop',3,'Intel i7 10650h',16,'M2 1000gb','Iris','Nvidia 3060',""),
  ]

  ngOnInit(): void {
  }

}
