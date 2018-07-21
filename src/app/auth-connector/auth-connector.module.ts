import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';
import {DatabaseWrapper} from './database-wrapper';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {FirebaseConnector} from './firebase-connector';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule

  ],
  declarations: [],
  providers: [AuthService, FirebaseConnector, DatabaseWrapper]
})
export class AuthConnectorModule { }
