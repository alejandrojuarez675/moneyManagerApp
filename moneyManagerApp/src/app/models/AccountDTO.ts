import { BaseEntityDTO } from './BaseEntityDTO';
import { CoinDTO } from './CoinDTO';

export class AccountDTO extends BaseEntityDTO{
    count?: number;
    coin?: CoinDTO;
    desc?: string;
}