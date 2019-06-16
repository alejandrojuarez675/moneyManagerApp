import { BaseEntityDTO } from './BaseEntityDTO';
import { InputDTO } from './InputDTO';
import { MovementTypeDTO } from './MovementTypeDTO';
import { CoinDTO } from './CoinDTO';
import { PaymentDTO } from './PaymentDTO';

export class MovementDTO extends BaseEntityDTO{
    movementType: MovementTypeDTO;
    mount: number;
    coin: CoinDTO;
    payment: PaymentDTO;
}