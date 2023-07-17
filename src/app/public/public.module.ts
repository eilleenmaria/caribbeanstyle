import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    ProductsComponent,
    AcercaComponent,
    CarritoComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule
  ],
  exports:[

  ],
  providers: []

})
export class PublicModule{
  constructor(){}
}
