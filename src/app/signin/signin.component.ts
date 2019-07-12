import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
SigninForm:FormGroup;
isSubmitted=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.SigninForm=new FormGroup({
      signinvalue:new FormControl('')
    })
  }
signIn(){
  login(){
    console.log(this.SigninForm.value);
    this.isSubmitted = true;
    if(this.SigninForm.invalid){
      return;
    }
    this.authService.login(this.SigninForm.value);
    this.router.navigateByUrl('');
  }
} 
}
