import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pd-choice',
  templateUrl: './pd-choice.component.html',
  styleUrls: ['./pd-choice.component.scss']
})
export class PdChoiceComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Mestre Unieuro','Marcon Unieuro','Marghera Unieuro'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    console.log(this.myControl.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
