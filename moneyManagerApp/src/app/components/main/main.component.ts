import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  inputs: String[]= ['1','pato','auto'];

  constructor(
    private store: Store<String>
  ) {
    this.store.subscribe( state => {
      console.log(state);
    });
   }

  ngOnInit() {}

}
