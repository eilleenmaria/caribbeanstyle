import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
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
