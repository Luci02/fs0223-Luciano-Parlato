import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IRegisterData } from '../interfaces/I-register-data';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent{

  constructor(
    private authSvc: AuthService
  ){

  }

  data:IRegisterData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  register(){
    this.authSvc.signUp(this.data)
    .subscribe(accessData => {
      alert(accessData.user.name)
    })
  }

}
