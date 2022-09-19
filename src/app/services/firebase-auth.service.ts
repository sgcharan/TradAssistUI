import  firebase  from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AuthService } from './abstract/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService extends AuthService {

  constructor(private fireAuth: AngularFireAuth) {
    super();
   }

  authorise(provider: firebase.auth.AuthProvider ): Promise<void>{
    return this.fireAuth.signInWithRedirect(provider);
  }

}
