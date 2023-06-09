import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PublicComponent} from "./public.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: '', component:PublicComponent, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
    // {path: 'login', loadChildren:()=> import ('./auth/login/login.component')}
  ] }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class PublicRoutingModule{

}
