//Modulo que permite que el servicio sea inyectable en los constructores de los componentes
import { Injectable } from '@angular/core';
//Modulos que permiten hacer peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Modulo que permite leer las respuestas del servidor
import { Observable } from 'rxjs/Observable';
//Modulo con variables globales
import { GLOBAL } from './global';
//Modelo User
import { User } from '../models/user';

@Injectable()
export class UserService {
  public url: string;

  constructor(public _http:HttpClient){
    this.url = GLOBAL.url;
  }

  pruebas(){
    return "HOLA MUNDO";
  }
}
