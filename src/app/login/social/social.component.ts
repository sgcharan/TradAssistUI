import { FirebaseAuthService } from './../../services/firebase-auth.service';
import  firebase  from 'firebase/compat/app';
import { Component, OnInit } from '@angular/core';
import { socialLoginBtns, SocialLoginButton, SocialLoginPLatforms } from '../constants/login.constants';
import { AuthService } from 'src/app/services/abstract/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  providers:[
    {
      provide: AuthService, useClass: FirebaseAuthService
    }
  ]
})
export class SocialComponent implements OnInit {
  socialLoginButtons: SocialLoginButton[] = socialLoginBtns;

  constructor(private authservice: AuthService) { }

  ngOnInit() {}

  trySocialLogin(platform: SocialLoginPLatforms){
    let authprovider: firebase.auth.AuthProvider;
    switch(platform){
      case 'google':
        authprovider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'facebook':
        authprovider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'twitter':
        authprovider = new firebase.auth.TwitterAuthProvider();
        break;
    }
    this.authservice.authorise(authprovider)
    .then(() => {
      console.log('authorised');
    });
   }

}
