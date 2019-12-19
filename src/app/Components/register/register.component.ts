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
  public status: string;

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

  //Recibo el form solo para resetearlo en caso de exito
  onSubmit(form){

    //Como la respuesta es Observable podemos usar los metodos Subscribe y procesar respuesta y error
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'Success'){
          this.status = response.status;

          //reseteo el user
          this.user = new User(1, 'ROLE_USER','','','','');
          //vacio formulario
          form.reset();

        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }



}
