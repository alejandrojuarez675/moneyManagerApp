import { Action } from '@ngrx/store';

export const login = "[Login] Login";

export class LoginAction implements Action {
    readonly type = login;
}