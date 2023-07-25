import { Component } from '@angular/core';



type User = {
  client_id: string;
  redirect_uri: string;
  login: string;  
  scope: string;
  state: string;
  allow_signup: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular appplication';

  
}
