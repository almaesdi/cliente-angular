import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';
import { Car } from '../../Models/car';
import { CarService } from '../../Services/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: '../car-new/car-new.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [UserService,CarService]
})
export class CarEditComponent implements OnInit {

  public page_title;
  public car: Car;
  public token;

  public request_status: string;

  constructor(
    private _route: ActivatedRoute,
    private _rotuer: Router,
    private _userService: UserService,
    private _carService: CarService,
  ){
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getCar();
  }

  getCar(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];

        this._carService.getCar(id).subscribe(
          response => {
            console.log(response);
            if(response.status == 'success'){
              this.car = response.car;
              this.page_title = 'Editando: '+this.car.title;
            }else{
              this._rotuer.navigate(['']);
            }
          },
          error => {
            console.log(<any>error);
          }
        );
      }
    );
  }

  onSubmit(form){
    this._carService.update(this.token,this.car,this.car.id).subscribe(
      response => {
        if(response.status == 'success'){
          this.request_status = 'success';
          this.car = response.car;
          this._rotuer.navigate(['/vehiculo',this.car.id]);
        }else{
          this.request_status = 'error';
        }
      },
      error => {
        this.request_status = 'error';
        console.log(<any>error);
      }
    );
  }

}
