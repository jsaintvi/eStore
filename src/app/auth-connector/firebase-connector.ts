/**
 * Avoids manipulating directly. Use a ConnectorWrapper to communicate with
 */

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class FirebaseConnector {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  /**
   * Returns firebase realtime database object. Avoid manipulating with connector directly. Use dal methods to communicate with connector
   * @returns {firebase.database.Database}
   */
  getFirebaseDB() {
    return this.db;
  }

  /**
   * @returns {AngularFireAuth}
   */

  getAuth() {
    return this.afAuth;
  }
  /**
   * Generate guid for user Id
   *
   * @returns guid
   */
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  registerUser(registerForm): Observable<any> {

    const email = registerForm.email;
    const password = registerForm.password;

    delete registerForm.password;

    const userId = this.guid();

    // add current time
    registerForm['registerTime'] = Date.now();

    return Observable.create((observer) => {
      this.register(email, password).then(authData => {

        registerForm.uid =  authData.user.uid;

        this.db.collection('users').doc(authData.user.uid).set(registerForm).then((data) => {

          // logs user if successful
          this.loginWithEmailAndPassword(email, password).subscribe(loginData => {
            observer.next(loginData);
            observer.complete();
          }, error => {
            observer.error(error);
          });
        });


      }).catch(error => {
        observer.next(error);
      });
    });
  }

  private login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  /**
   * Login with email and password
   *
   * @param {string} email  User email
   * @param {string} password  User password
   *
   * @returns {Observable} Observable containing non-null [firebase.User]{@link https://firebase.google.com/docs/reference/js/firebase.User}
   */
  loginWithEmailAndPassword(email, password): Observable<any> {

    return Observable.create( (observer) => {
      this.login(email, password)
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  /**
   * Log user out from firebase
   */
  logout() {
    this.afAuth.auth.signOut();
  }

  /**
   *  Get data for user
   * @param uid
   * @returns {Observable<any[]>}
   */
  getUserData(uid): Observable<any> {
    return Observable.create(observer => {
      this.db.collection('users').doc(`${uid}`).valueChanges().subscribe((data) => {
        observer.next(data);
      });

    });
  }

}
