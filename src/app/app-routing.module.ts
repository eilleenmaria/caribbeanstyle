import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from "./app.component";


const routes: Routes = [
  { path: '', component:AppComponent, children:[
    {path: '', redirectTo: 'public', pathMatch: 'full'},
    // {path: 'login', component: LoginComponent}
    {path: '', loadChildren:()=> import ('./public/public.module').then(m =>m.PublicModule)}
  ] }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
