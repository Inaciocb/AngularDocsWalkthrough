import { Component } from '@angular/core';

@Component({
  selector: 'primeiro',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'inacio';
  age: number = 19;
}
