import { Action } from '@ngrx/store';
import { UserDTO } from 'src/app/models/UserDTO';
import * as UserActions from '../actions/UserAction';

const AnonymousState: UserDTO = {id:0, username: 'anonymous', password: undefined};

export function LoginReducer(state: UserDTO, action: Action) {
    if (state == null) {
        return AnonymousState;
    }
    switch (action.type) {

        case UserActions.login:
            return state;

        default:
            return state;
    }
}