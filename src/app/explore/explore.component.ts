import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  computerList:Computer[] = [
    new Computer(1,'Aspire XD14E','Acer',850,'Laptop',1,'Ryzen 7 4400U',16,'1000','Vega 10','Nvidia 1650ti',"https://cdn.pocket-lint.com/r/s/1200x/assets/images/150582-laptops-review-acer-swift-3-2020-review-images-image1-fjjwkmhxey.jpg"),
    new Computer(2,'CA41B','Asus',350,'Laptop',2,'Intel i3 10th',8,'256','Iris','/',"https://gizchina.it/wp-content/uploads/2020/11/Recensione-Asus-Rog-G14-gaming-pc-notebook-portatile-prezzo-prestazioni-fotocamera-display-italia-test-software-benchmark-fps-games-details-3-scaled.jpg"),
    new Computer(3,'F314X','ACER',650,'Laptop',6,'Ryzen 5 4400U',8,'256','Vega 8','/',"https://www.cnet.com/a/img/onBDX7K6XyWXQfKOSNeeSjwMvs8=/1200x630/2020/05/06/02bb6326-276f-4d0b-a064-54ab76365a7c/acer-aspire-1-2020-0013.jpg"),
    new Computer(4,'XD14E','Lenovo',1150,'Laptop',3,'Intel i7 11th',16,'512','Iris X','Nvidia 3060',"https://www.hwupgrade.it/articoli/5816/240.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
