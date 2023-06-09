import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILoginData } from '../interfaces/I-login-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private authSvc: AuthService,
    private router: Router
  ){}


  data:ILoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {
      this.router.navigate(['/dashboard'])
    })
  }

}
