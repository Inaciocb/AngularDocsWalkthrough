import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  userId!: number; // Add the '!' operator to indicate it will be assigned in ngOnInit

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Assuming the parameter name is 'id'
    });
  }
}
