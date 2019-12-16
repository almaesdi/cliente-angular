import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

//Configuracion de rutas
const appRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path:'**', component: LoginComponent}, //Doble asterisco es si la ruta no existe
];

//Esto nos permitira inyectar el servicio dentro del framework
export const appRoutingProviders: any[] = [];
//para exportar toda la configuracion de la ruta
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
