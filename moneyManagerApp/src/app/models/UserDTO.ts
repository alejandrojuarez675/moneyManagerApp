import { BaseEntityDTO } from './BaseEntityDTO';

export class UserDTO extends BaseEntityDTO{
    username: String;
    password: String;
    name?: String;
}