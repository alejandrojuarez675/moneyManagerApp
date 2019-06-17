import { AccountDTO } from '../models/AccountDTO';
import { InputDTO } from '../models/InputDTO';
import { InterchangeDTO } from '../models/InterchangeDTO';
import { MovementDTO } from '../models/MovementDTO';
import { MovementTypeDTO, TypeMovementType } from '../models/MovementTypeDTO';

export class AppState{
    inputs: InputDTO[];
    loading: boolean;
}

export const InitialTestState: AppState = initState();

function initState(): AppState {
    let state = new AppState();
    state.loading = false;

    state.inputs = [];
    for (let index = 0; index < 10; index++) {
        state.inputs.push({ 
            id: index, 
            date: index % 2 == 0 && index < 5? new Date() : new Date('06/'+index+'/2019'), 
            movement: index%2 == 0 ? initialMovement() : undefined , 
            interchange: index % 2 == 1 ? initialInterchange() : undefined 
        });
    }
    state.inputs.sort((a, b) => b.date.getTime() - a.date.getTime());
    return state;
}

function initialMovement(): MovementDTO{
    let result: MovementDTO = new MovementDTO();
    result.movementType = { id: 0, desc: 'Super', type: TypeMovementType.buy};
    result.mount = 20;
    result.coin = { id: 0, desc: '$' };
    result.payment = { id: 0, desc: 'Efectivo', account: {id: 0 } };
    return result;
}

function initialInterchange(): InterchangeDTO {
    let result : InterchangeDTO = new InterchangeDTO();
    result.id = 0;
    result.desc = 'Compra de dolares';
    result.amountFrom = 450;
    result.amountTo = 10;
    result.moventType = { id: 10, desc: 'Compra de dolares', type: TypeMovementType.buy };
    result.paymentFrom = { id: 0, desc: 'Efectivo', account: { id: 0 } };
    result.paymentTo = { id: 1, desc: 'U$S', account: { id: 0 } };
    result.coin = { id: 0, desc: '$'};
    return result;
}