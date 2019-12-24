import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './Services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit{
  title = 'cliente-angular';

  public identity;
  public token;

  constructor(
    private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

    ngOnInit(){
      console.log('app.component cargado');
    }

    //Metodo que se ejecuta cada vez que existan cambios en la aplicacion
    ngDoCheck(){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    }

}
