import { User } from './../../login/constants/login.constants';
import  firebase  from 'firebase/compat/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AuthService {

  constructor() { }

  abstract authorise(arg0: firebase.auth.AuthProvider | User): Promise<void> | Promise<firebase.auth.UserCredential>;

}
