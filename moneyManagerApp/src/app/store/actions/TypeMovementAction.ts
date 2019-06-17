import { Action } from '@ngrx/store';

export const init = "[Type] Init";

export class InitTypesAction implements Action {
    readonly type = init;
}