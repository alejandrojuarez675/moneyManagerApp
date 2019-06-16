import { AccountDTO } from '../models/AccountDTO';
import { CoinDTO } from '../models/CoinDTO';
import { InputDTO } from '../models/InputDTO';
import { InterchangeDTO } from '../models/InterchangeDTO';
import { MovementDTO } from '../models/MovementDTO';
import { MovementTypeDTO } from '../models/MovementTypeDTO';
import { PaymentDTO } from '../models/PaymentDTO';

export class AppState{
    movements: MovementDTO[];
    interchanges: InterchangeDTO[];
    accounts: AccountDTO[];
    payments: PaymentDTO[];
    inputs: InputDTO[];
    coins: CoinDTO[];
    movementTypes: MovementTypeDTO[];
    loading: boolean;

}

export const InitialTestState: AppState = initState();

function initState(): AppState {
    let state = new AppState();
    state.loading = false;

    state.inputs = [];
    for (let index = 0; index < 18; index++) {
        state.inputs.push({ 
            id: index, 
            date: index % 2 == 0 && index < 5? new Date() : new Date('06/'+index+'/2019'), 
            movement: index%2 == 0 ? new MovementDTO() : undefined , 
            interchange: index%2 == 1 ? new InterchangeDTO() : undefined 
        });
    }
    state.inputs.sort((a, b) => b.date.getTime() - a.date.getTime());

    state.accounts = [];
    for (let index = 0; index < 4; index++) {
        state.accounts.push({
            id: index,
            count: 12 * index,
            coin: undefined,
            desc: 'bank' + index
        });
    }

    return state;
}
