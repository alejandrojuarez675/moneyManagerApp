import { Action } from '@ngrx/store';

export const init = "[Account] Init";

export class InitAccountAction implements Action {
    readonly type = init;
}