import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulo para trabajar con formularios
import { FormsModule } from '@angular/forms'

//Modulo para trabajar con rutas
import { routing, appRoutingProviders } from './app.routing'

//Modulo para peticiones HTTP, usadas por los servicios
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { DefaultComponent } from './Components/default/default.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogoutComponent } from './Components/logout/logout.component';

import { CarNewComponent } from './Components/car-new/car-new.component';
import { CarEditComponent } from './Components/car-edit/car-edit.component';
import { CarDetailComponent } from './Components/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CarNewComponent,
    CarEditComponent,
    CarDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //formularios
    routing, //rutas
    HttpClientModule, //cliente http
  ],
  providers: [
    appRoutingProviders //rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
