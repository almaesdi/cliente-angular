import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  template: '',
  providers: [UserService]
})

export class LogoutComponent implements OnInit{

  constructor(
    private _userService: UserService,
    //private _route: ActivatedRoute,
    private _router: Router
  ){}

  public ngOnInit(){
    this._userService.logout();

    //redireccion
    this._router.navigate(['']);
  }
}
