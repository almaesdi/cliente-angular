import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../../Models/car';

//Importo Servicio de User y car
import { UserService } from '../../Services/user.service';
import { CarService } from '../../Services/car.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css'],
  providers: [UserService, CarService],
})
export class CarNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public car: Car;

  //Variable status respuesta de login
  public request_status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) {
    this.page_title = 'Crear nuevo vehiculo';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.car = new Car(1,'','',0,'',null,null);
  }

  ngOnInit() {
    //Me aseguro que el usuario este correctamente logeado o sino lo saco
    if(this.identity == null){
      this._router.navigate(["/login"]);
    }
  }

  onSubmit(form){
    console.log('Enviando formulario');

    this._carService.create(this.token,this.car).subscribe(
      response => {
        if(response.status != 'error'){

          this.car = response.car;
          this.request_status = 'success';
          //this._router.navigate(['/home']);

        }else{
          this.request_status = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.request_status = 'error';
      }
    );
  }

}
