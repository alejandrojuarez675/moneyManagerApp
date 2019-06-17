import { Action } from '@ngrx/store';
import { MovementTypeDTO, TypeMovementType } from 'src/app/models/MovementTypeDTO';
import * as TypeMovementActions from '../actions/TypeMovementAction';

const initialTypes: MovementTypeDTO[] = initialDefaultTypes();

function initialDefaultTypes(): MovementTypeDTO[]{
    let types: MovementTypeDTO[] = [];
    types.push({ id: 0, desc: 'Super', type: TypeMovementType.buy });
    return types;
}

export function TypeMovementReducer(state: MovementTypeDTO[], action: Action){
    if (state == null) {
        return initialTypes;
    }
    switch (action.type) {
        
        case TypeMovementActions.init:
            return state;

        default:
            return state;
    }

}