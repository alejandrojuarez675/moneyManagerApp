import { BaseEntityDTO } from './BaseEntityDTO';

export class MovementTypeDTO extends BaseEntityDTO{
    desc: string;
    type: TypeMovementType;
    img?: string;
    actived?: boolean;
}

export enum TypeMovementType{
    buy, sell, investiment, creditCard
}