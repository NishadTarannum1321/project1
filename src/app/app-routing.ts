import { NgModule, Component } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { AuthGuard } from './canactive.guard';
const routes:Routes=[
    { path: '', pathMatch: 'full', redirectTo: 'signin'},
    {path:'signup',loadChildren: './signup/signup.module#SignupModule'},
    {path:'signin',loadChildren: './signin/signin.module#SigninModule'},
    {canActivate:[AuthGuard]}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[AuthGuard]
})
export class AppRoutingModule{

}