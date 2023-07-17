import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PublicComponent} from "./public.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { AcercaComponent } from "./acerca/acerca.component";
import { CarritoComponent } from "./carrito/carrito.component";


const routes: Routes = [
  { path: '', component:PublicComponent, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'carrito', component: CarritoComponent}

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
