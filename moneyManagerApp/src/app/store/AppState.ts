import { MovementDTO } from '../models/MovementDTO';
import { PaymentDTO } from '../models/PaymentDTO';
import { InputDTO } from '../models/InputDTO';
import { InterchangeDTO } from '../models/InterchangeDTO';
import { CoinDTO } from '../models/CoinDTO';
import { MovementTypeDTO } from '../models/MovementTypeDTO';

export class AppState{
    movements: MovementDTO[];
    interchanges: InterchangeDTO[];
    accounts: Account[];
    payments: PaymentDTO[];
    inputs: InputDTO[];
    coins: CoinDTO[];
    movementTypes: MovementTypeDTO[];
    loading: boolean;

}

export const InitialState: AppState = initState();

function initState(): AppState {
    let state = new AppState();
    state.loading = false;
    state.inputs = [];
    for (let index = 0; index < 5; index++) {
        state.inputs.push({ id: index, date: new Date() });
    }
    return state;
}
