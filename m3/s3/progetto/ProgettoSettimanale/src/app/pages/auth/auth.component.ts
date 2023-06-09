import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    let accessToken = localStorage.getItem('user');

    if(Boolean(accessToken)){
      this.router.navigate(['/dashboard'])
    }
  }

}
