import { AppState, InitialState } from '../AppState';
import { Action } from '@ngrx/store';
import * as InitialAction from 'src/app/store/actions/InitialAction';

export function MainReducer(state: AppState, action: Action){
    if (state == null) {
        return InitialState;
    }
    switch (action.type) {

        case InitialAction.init:
            return InitialState;
        
        default:
            return state;
    }
}