import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.logout(){
      this.authService.logout();
      this.router.navigateByUrl('signin');
    }
  }

}
