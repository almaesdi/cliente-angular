import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulo para trabajar con formularios
import { FormsModule } from '@angular/forms'

//Modulo para trabajar con rutas
import { routing, appRoutingProviders } from './app.routing'

//Modulo para peticiones HTTP, usadas por los servicios
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
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
