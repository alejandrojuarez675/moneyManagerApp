import { BaseEntityDTO } from './BaseEntityDTO';
import { AccountDTO } from './AccountDTO';

export class PaymentDTO extends BaseEntityDTO{
    desc: string;
    img: string;
    account: AccountDTO;
}