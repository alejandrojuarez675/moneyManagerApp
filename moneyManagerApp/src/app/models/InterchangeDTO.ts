import { BaseEntityDTO } from './BaseEntityDTO';
import { InputDTO } from './InputDTO';
import { PaymentDTO } from './PaymentDTO';
import { MovementTypeDTO } from './MovementTypeDTO';
import { CoinDTO } from './CoinDTO';

export class InterchangeDTO extends BaseEntityDTO{
    paymentFrom: PaymentDTO;
    paymentTo: PaymentDTO;
    amountFrom: number;
    amountTo: number;
    coin: CoinDTO;
    desc: string;
    moventType: MovementTypeDTO;
}