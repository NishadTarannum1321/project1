import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageComponent } from './userpage/userpage.component';
import {RouterModule} from '@angular/router';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [UserpageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[AuthService],
  exports:[UserpageComponent]
})
export class CoreModule { }
