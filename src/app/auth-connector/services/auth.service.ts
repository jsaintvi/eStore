import {Injectable, NgZone} from '@angular/core';
import {DatabaseWrapper} from '../database-wrapper';
import {observable, Observable, of} from 'rxjs';
import {IUser} from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = {};
  private uid = undefined;
  // currentUser: Observable<IUser| null>;
  // currentUserSnapshot: IUser | null;

  constructor(private dal: DatabaseWrapper, private zone: NgZone) {
    this.dal.getAuth().auth.onAuthStateChanged((authData) => {
      if (authData === null) {
        this.userData = {};
      }

      if (authData) {
      const uid = authData.uid;
      this.userData = {};
      this.userData['uid'] = uid;
      this.dal.getUserData(uid).subscribe((data) => {
        const userData = data;
        if (data) {
          this.uid = data.uid;
          delete  data.uid;
          this.userData = data;

          this.zone.run(() => {
            this.userData = userData;
          });
        }
      });
      }
    });

    // this.setCurrentUserSnapshot();
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
  // private setCurrentUserSnapshot(): void {
  //   this.currentUser.subscribe(user => {
  //     if (user) {
  //       this.currentUserSnapshot = user;
  //     }
  //
  //   });
  // }
}
