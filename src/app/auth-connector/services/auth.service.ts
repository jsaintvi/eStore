import { Injectable } from '@angular/core';
import {DatabaseWrapper} from '../database-wrapper';
import {Observable, of} from 'rxjs';
import {IUser} from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<IUser | null>;
  public currentUserSnapshot: IUser | null;

  constructor(protected dal: DatabaseWrapper) {
      this.dal.getAuth().auth.onAuthStateChanged((user) => {
        if (user) {
          this.dal.getUserData(user.uid).subscribe(data => {
          });
        } else {
          this.currentUser =  of(null);
        }
      });
  }

  /**
   *
   * @param email
   * @param password
   * @returns {Promise<firebase.auth.UserCredential>}
   */
  public signup(email, password) {
    return this.dal.register(email, password);
  }

  public registerUser(form) {
    return this.dal.registerUser(form);
  }

  public login(email, password) {
    return this.dal.loginWithEmailAndPassword(email, password);
  }

  public logout() {
    this.dal.logout();
  }

  /**
   *
   * @returns {Observable<any[]>}
   */
  public getUserData(userId) {
    return this.dal.getUserData(userId);
  }
  private setCurrentUserSnapshot(): void {
    this.currentUser.subscribe(user => this.currentUserSnapshot = user);
  }
}
