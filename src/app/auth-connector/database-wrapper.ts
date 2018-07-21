/**
 * THis Service provides an abstraction layer on top of firebase Connector
 * THis class does not do ANY validations
 */
import {Inject, Injectable} from '@angular/core';
import {FirebaseConnector} from './firebase-connector';

@Injectable()
export class DatabaseWrapper {

  constructor(private connector: FirebaseConnector) {
    console.log(this.connector)
    debugger;
  }

  /**
   * Register with email and password
   * @param email
   * @param password
   * @returns {Promise<firebase.auth.UserCredential>}
   */
  register (email, password) {
    return this.connector.register(email, password);
  }

  /**
   * register users with data from forms
   * @param form
   * @returns {Observable<any>}
   */
  registerUser(registerForm) {
    return this.connector.registerUser(registerForm);
  }

  /**
   * Retrieve data for specified user
   * @param uid
   * @returns {Observable<any[]>}
   */
  getUserData(uid) {
    return this.connector.getUserData(uid);
  }

  /**
   * Log users with provided email and password
   * @param email
   * @param password
   * @returns {any}
   */
  loginWithEmailAndPassword(email, password) {
    return this.connector.loginWithEmailAndPassword(email, password);
  }

  /**
   * Log user out of firebase
   */
  logout() {
    this.connector.logout();
  }
  /**
   * Retrieve reference to user
   * use this to manipulate collections
   * @returns {AngularFireAuth}
   */
  getAuth() {
    return this.connector.getAuth();
  }

}
