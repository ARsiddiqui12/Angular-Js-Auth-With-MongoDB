import { Injectable } from '@angular/core';

import { Observable, of, throwError  } from 'rxjs';

import { tap, delay } from 'rxjs/operators';

import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  isUserLoggedIn: boolean = false;

   login(userName: string, password: string): Observable<any> {

    console.log(userName);
    console.log(password);

   const VerifyLoginUrl ="http://localhost:8081/login/check";

   const LoginCredentials = {
    userName:userName,
    password:password
  };

  this.http.post(VerifyLoginUrl, LoginCredentials).subscribe((response: any) => {

      if (response.code == 200) {

        this.isUserLoggedIn = response.isLoggedIn;

        localStorage.setItem('isUserLoggedIn', response.isLoggedIn);

        console.log(response.isLoggedIn, "api response");
      }

    });
   

  return of(this.isUserLoggedIn).pipe(delay(2000));
   
    
 }

 logout() {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn'); 
  }

}
