import { Injectable } from '@angular/core';
import {IAuthService} from '../../shared/interfaces/auth-service';
import {IUser} from '../../shared/interfaces/user';
import {Role} from '../../shared/enums/role.enum';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceFakeService implements IAuthService {

  constructor() { }

  getUserData(userId) {
    return of(<IUser>{
      name: {
        firstName: 'Jodex',
        lastName: 'Saint-Vil'
      },
    dateOfBirth: 123456,
    photoUrl: '',
    role: Role.Manager,
    });
  }

  login(email, password) {
    return of({});
  }

  logout() {
    return of({});
  }

  registerUser(form) {
    return of({});
  }

  signup(email, password) {
    return of({});
  }
}
