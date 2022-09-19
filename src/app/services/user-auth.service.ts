import  firebase from 'firebase/compat/app';
import { User } from './../login/constants/login.constants';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './abstract/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService extends AuthService {

  constructor(private fireAuth: AngularFireAuth) {
    super();
   }

  authorise(user: User): Promise<firebase.auth.UserCredential>{
    return this.fireAuth.signInWithEmailAndPassword(user.email,user.password);
  }
}
