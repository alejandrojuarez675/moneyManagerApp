import { AppState, InitialTestState } from '../AppState';
import { Action } from '@ngrx/store';
import * as InitialAction from 'src/app/store/actions/InitialAction';

export function MainReducer(state: AppState, action: Action){
    if (state == null) {
        return InitialTestState;
    }
    switch (action.type) {

        case InitialAction.init:
            return InitialTestState;
        
        default:
            return state;
    }
}