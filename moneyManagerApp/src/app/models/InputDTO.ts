import { BaseEntityDTO } from './BaseEntityDTO';
import { InterchangeDTO } from './InterchangeDTO';
import { MovementDTO } from './MovementDTO';

export class InputDTO extends BaseEntityDTO{
    date: Date;
    interchange?: InterchangeDTO;
    movement?: MovementDTO;
}