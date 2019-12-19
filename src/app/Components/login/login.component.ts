import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit{
  public title: string;
  public user: User;

  //Variables para LocalStorage
  public token;
  public identity;

  constructor(
    private _userService: UserService
    //private _route: ActivatedRoute,
    //private _router: Router
  ){
    this.title = 'Identificate';
    this.user = new User(1, 'ROLE_USER','','','','');
  }

  ngOnInit(){
    console.log('Login.component cargado correctamente');
  }

  onSubmit(form){
    console.log('Enviando formulario');

    this._userService.signup(this.user).subscribe(
      response =>{
        //Token
        this.token = response;
        localStorage.setItem('token',this.token);

        //Objeto Usuario Identificado
        this._userService.signup(this.user,true).subscribe(
          response => {
            this.identity = response;
            localStorage.setItem('identity',JSON.stringify(this.identity));
          },
          error => {
            console.log(<any>error);
          }
        );

      },
      error=>{
        console.log(<any>error);
      }
    );

  }

}
