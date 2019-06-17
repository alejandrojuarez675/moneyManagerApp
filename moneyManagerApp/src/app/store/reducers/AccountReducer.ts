import { AccountDTO } from 'src/app/models/AccountDTO';
import { Action } from '@ngrx/store';
import * as AccountActions from '../actions/AccountAction';

const initialAccount: AccountDTO[] = initialDefaultAccount();

function initialDefaultAccount(): AccountDTO[] {
    let accounts: AccountDTO[] = [];
    accounts.push({ id: 0, count: 10000, coin: { id: 0, desc: '$' }, desc: 'Efectivo' });
    accounts.push({ id: 1, count: 180, coin: { id: 0, desc: 'U$S' }, desc: 'Dolares' });
    accounts.push({ id: 2, count: 2000, coin: { id: 0, desc: '$' }, desc: 'Banco Nación' });
    return accounts;
}

export function AccountReducer(state: AccountDTO[], action: Action) {
    if (state == null) {
        return initialAccount;
    }
    switch (action.type) {

        case AccountActions.init:
            return state;

        default:
            return state;
    }
}