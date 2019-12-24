//Modulo que permite que el servicio sea inyectable en los constructores de los componentes
import { Injectable } from '@angular/core';
//Modulos que permiten hacer peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Modulo que permite leer las respuestas del servidor
import { Observable } from 'rxjs/Observable';
//Modulo con variables globales
import { GLOBAL } from './global';
//Modelo User
import { User } from '../Models/user';

@Injectable()
export class UserService {
  public url: string;

  //Variables LocalStorage
  public identity;
  public token;


  constructor(
    public _http:HttpClient
    ){
    this.url = GLOBAL.url;
  }

  //Observable<any> indica que el retorno sera un observable
  register(user): Observable<any>{
    let json = JSON.stringify(user);

    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'register',params,{headers:headers});
  }

  //Observable<any> indica que el retorno sera un observable
  //gettoken es opcional, en caso de omision es NuLL
  signup(user, gettoken = null): Observable<any>{

    //Si tenemos gettoken, se lo agregamos al user
    if(gettoken != null){
      user.gettoken = 'true';
    }

    let json = JSON.stringify(user);

    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'login',params,{headers:headers});
  }

  /**METODOS PARA EXTRACCTION DESDE LOCAL STORAGE **/
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;
  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
  }

}
