import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm=new FormGroup({
      email1:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  sendData(val){
    console.log(this.userForm);
  }
  saveData(val){
    console.log(this.userForm.value);
  }
  

}
