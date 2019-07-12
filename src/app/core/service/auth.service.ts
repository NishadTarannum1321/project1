import { Injectable } from '@angular/core';
import { user } from 'src/app/shared/interface';

@Injectable()

export class AuthService{

    isSubmitted=false;
    redirectUrl:string;
    constructor() { }

  public login(UserLogin:user){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}