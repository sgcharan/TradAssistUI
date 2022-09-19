import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD, STRONG_REGEX, TEMPLATE_ERROR_MESSAGE } from './../constants/login.constants';
import firebase  from 'firebase/compat/app';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/abstract/auth.service';
import { FirebaseError } from 'firebase/app';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[
    {
      provide: AuthService, useClass: UserAuthService
    }
  ]
})
export class UserComponent implements OnInit {
  email: FormControl = new FormControl('',[Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  promptSignUp: boolean;
  errorMsg: string;
  promptPasswordReset: boolean;
  userForm: FormGroup;

  constructor(private authservice: AuthService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() {}

  userLogin(){
    this.authservice.authorise({email: this.email.value, password: this.password.value})
    .then((cred: firebase.auth.UserCredential | void)=> {
      if(cred){
        console.log(JSON.stringify(cred));
      }
    })
    .catch((err) => {
      if(err){
        const error = err as FirebaseError;
        if(error.code === USER_NOT_FOUND_ERROR)
          {
            this.promptSignUp = true;
          }
        if(error.code === WRONG_PASSWORD)
          {
            this.errorMsg = TEMPLATE_ERROR_MESSAGE.incorrectPassword;
            this.password.setErrors({incorrect: true});
            this.promptPasswordReset = true;
          }
      }
    });
   }

}
