import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { DefaultComponent } from './Components/default/default.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogoutComponent } from './Components/logout/logout.component';

import { CarNewComponent } from './Components/car-new/car-new.component';
import { CarEditComponent } from './Components/car-edit/car-edit.component';
import { CarDetailComponent } from './Components/car-detail/car-detail.component';

//Configuracion de rutas
const appRoutes: Routes = [
  {path:'', component:DefaultComponent},
  {path:'home', component:DefaultComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'registro', component:RegisterComponent},
  {path:'crear-vehiculo', component:CarNewComponent},
  {path:'editar-vehiculo/:id', component:CarEditComponent},
  {path:'vehiculo/:id', component:CarDetailComponent},
  {path:'**', component: DefaultComponent}, //Doble asterisco es si la ruta no existe, podemos definir 404
];

//Esto nos permitira inyectar el servicio dentro del framework
export const appRoutingProviders: any[] = [];
//para exportar toda la configuracion de la ruta
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
