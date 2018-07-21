import {IUser} from '../interfaces/user';
import {Role} from '../enums/role.enum';

export class User implements IUser {
  constructor(public name: { firstName: string; lastName: string }, public dateOfBirth: Date, public photoUrl: string, public role: Role) {

  }

}
