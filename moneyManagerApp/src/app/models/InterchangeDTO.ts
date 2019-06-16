import { BaseEntityDTO } from './BaseEntityDTO';
import { InputDTO } from './InputDTO';
import { PaymentDTO } from './PaymentDTO';
import { MovementTypeDTO } from './MovementTypeDTO';

export class InterchangeDTO extends BaseEntityDTO{
    paymentFrom: PaymentDTO;
    paymentTo: PaymentDTO;
    amountFrom: number;
    amountTo: number;
    desc: string;
    moventType: MovementTypeDTO;
}