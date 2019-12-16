import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../Models/user';

//Importo Servicio de User
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [UserService] //inyeccion de servicio
})

export class RegisterComponent implements OnInit{
  public title: string;
  public user: User;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.title = 'Registrate';
    this.user = new User(1, 'ROLE_USER','','','','');
  }

  ngOnInit(){
    console.log('Registrate.component cargado correctamente');
  }

  onSubmit(){
    console.log(this._userService.pruebas());
  }

}
