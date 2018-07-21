import {Role} from '../enums/role.enum';

export interface IUser {
  name: {
    firstName: string
    lastName: string
  };
  dateOfBirth: Date;
  photoUrl: string;
  role: Role;
}
