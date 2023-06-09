import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAccessData } from './interfaces/I-access-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILoginData } from './interfaces/I-login-data';
import { IRegisterData } from './interfaces/I-register-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;


  private authSubject = new BehaviorSubject<null | IAccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));

  authLogoutTimer:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.restoreUser();

   }

  login(data:ILoginData){
    return this.http.post<IAccessData>(this.apiUrl + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);//effettuo il log anche per il subject
      localStorage.setItem('user', JSON.stringify(data))

      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate);
    }),
      catchError(this.errors)
    )
  }

  restoreUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }
    const user: IAccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }

    this.authSubject.next(user);//effettuo il log anche per il subject

  }

  signUp(data:IRegisterData){
    return this.http.post<IAccessData>(this.apiUrl + '/register', data)
    .pipe(catchError(this.errors));
  }

  logout(): void {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate:Date): void {
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(()=>{
      this.logout();
    }, expMs)
  }

  errors(err: any){
    console.log(err.error);
    return throwError(err.error);
  }

}
