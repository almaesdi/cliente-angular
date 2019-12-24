//Modulo que permite que el servicio sea inyectable en los constructores de los componentes
import { Injectable } from '@angular/core';
//Modulos que permiten hacer peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Modulo que permite leer las respuestas del servidor
import { Observable } from 'rxjs/Observable';
//Modulo con variables globales
import { GLOBAL } from './global';
//Modelo Car
import { Car } from '../Models/car';

@Injectable()
export class CarService {
  public url: string;

  constructor(
    public _http:HttpClient
    ){
    this.url = GLOBAL.url;
  }

  create(token, car):Observable<any>{
    let json = JSON.stringify(car);
    let params = "json="+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Authorization',token);

    return this._http.post(this.url+'cars',params, {headers: headers});
  }

  getCars():Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.get(this.url+'cars', {headers: headers});
  }

  getCar(id):Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.get(this.url+'cars/'+id, {headers: headers});
  }

  update(token, car, id):Observable<any>{
    let json = JSON.stringify(car);
    let params = "json="+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Authorization',token);

    return this._http.put(this.url+'cars/'+id,params, {headers: headers});
  }

  delete(token, id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Authorization',token);

    return this._http.delete(this.url+'cars/'+id, {headers: headers});
  }

}
