import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Auth {
  client_id: string;
  redirect_uri: string;
  login: string;
  scope: string;
  state: string;
  allow_signup: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(private http: HttpClient) { }  


  getRequestGithub( ): Observable<Auth> {
    return this.http.get<Auth>('https://github.com/login/oauth/authorize');
  }


}
export class User {
  client_id: string = 'cd55e33784665d37f471';
  redirect_uri: string = 'http://localhost:4200/login';
  login: string = '';
  scope: string = 'user';
  state: string = '';
  allow_signup: string = '';
}