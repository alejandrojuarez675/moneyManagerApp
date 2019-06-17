import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InputDTO } from 'src/app/models/InputDTO';
import * as InitialAction from 'src/app/store/actions/InitialAction';
import { AppState } from 'src/app/store/AppState';
import { AccountDTO } from 'src/app/models/AccountDTO';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  loading: boolean;
  grid: Map<String, InputDTO[]> = new Map();
  keys: String[];
  accounts: AccountDTO[];

  constructor(
    private store: Store<{ main: AppState}>
  ) {

    this.store.select('main').subscribe( data => {
      this.loading = data.loading;

      // Map the list by date
      this.grid = new Map();
      this.keys = [];
      data.inputs.forEach( x => {
        let key = x.date.getDate() + '/' + (x.date.getMonth()+1);
        let list = this.grid.get(key);
        if (!list) {
          this.keys.push(key);
          list = [];
        }
        list.push(x);
        this.grid.set(key, list);
      });

      this.accounts = data.accounts;
    });

  }
  
  ngOnInit() {
    this.store.dispatch(new InitialAction.InitAppAction());
  }

}
