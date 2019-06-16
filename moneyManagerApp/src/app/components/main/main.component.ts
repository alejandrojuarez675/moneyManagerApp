import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InputDTO } from 'src/app/models/InputDTO';
import * as InitialAction from 'src/app/store/actions/InitialAction';
import { AppState } from 'src/app/store/AppState';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  inputs: InputDTO[];
  loading: boolean;

  constructor(
    private store: Store<{ main: AppState }>
  ) {
    this.store.select('main').subscribe( data => {
      this.loading = data.loading;
      this.inputs = data.inputs;
    });
  }
  
  ngOnInit() {
    this.store.dispatch(new InitialAction.InitAppAction());
  }

}
