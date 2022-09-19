
export type SocialLoginPLatforms = 'google' | 'facebook' | 'twitter';

export interface SocialLoginButton {
  platform: SocialLoginPLatforms;
  disabled: boolean;
}

export const socialLoginBtns: SocialLoginButton[] =
[{platform:'google',disabled:false}, {platform:'facebook',disabled:true},{platform:'twitter',disabled:true}];

export interface User{
  email: string;
  password: string;
}

export const USER_NOT_FOUND_ERROR = 'auth/user-not-found';
export const WRONG_PASSWORD = 'auth/wrong-password';

export const TEMPLATE_ERROR_MESSAGE ={
  incorrectPassword: 'Incorrect Password'
};

export const STRONG_REGEX = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})`;
