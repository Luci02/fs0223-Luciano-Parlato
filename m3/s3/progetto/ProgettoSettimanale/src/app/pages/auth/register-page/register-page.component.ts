import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IRegisterData } from '../interfaces/I-register-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent{

  constructor(
    private authSvc: AuthService,
    private router: Router,
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
      alert('Registrazione avvenuta a nome di ' + accessData.user.name)
      this.router.navigate(['/auth','login'])
    })
  }

}
