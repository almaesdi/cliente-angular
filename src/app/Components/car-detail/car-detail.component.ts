import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../Models/user';
import { UserService } from '../../Services/user.service';
import { Car } from '../../Models/car';
import { CarService } from '../../Services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [UserService,CarService]
})
export class CarDetailComponent implements OnInit {

  public car: Car;

  constructor(
    private _route: ActivatedRoute,
    private _rotuer: Router,
    private _userService: UserService,
    private _carService: CarService,
  ){

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

}
