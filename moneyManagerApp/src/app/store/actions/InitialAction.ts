import { Action } from '@ngrx/store';

export const init = "[Init] Init app";

export class InitAppAction implements Action {
    readonly type = init;
}