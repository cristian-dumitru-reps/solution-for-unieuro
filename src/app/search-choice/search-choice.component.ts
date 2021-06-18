import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-search-choice',
  templateUrl: './search-choice.component.html',
  styleUrls: ['./search-choice.component.scss']
})
export class SearchChoiceComponent implements OnInit {
  puntoVendita:any;
  sceltaComputer:any;
  constructor(private _Activatedroute:ActivatedRoute,private router:Router) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.puntoVendita = params.get('puntovendita'); 
    });
   }

   sceltaPc(id:number){
     this.sceltaComputer = id;
   }

   switchRoute(){
    if(this.sceltaComputer==1){
      console.log('Scelto di esplorare:',this.puntoVendita);
      this.router.navigate(['/esplora',this.puntoVendita]);
     }
     else if(this.sceltaComputer==2){
      console.log('Scelto di analizzare:',this.puntoVendita);
      this.router.navigate(['/analizza',this.puntoVendita]);
     }
     else{
      console.log('Scelto di confrontare:',this.puntoVendita);
      this.router.navigate(['/confronta',this.puntoVendita]);
     }
   }
  ngOnInit(): void {
  }

}
