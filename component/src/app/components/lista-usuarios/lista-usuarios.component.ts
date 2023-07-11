import { Component, OnInit } from '@angular/core';
import { UserListService, Dados } from 'src/app/services/user-list.service';

interface Usuario {
  nome: string;
  cargo: string;
  idade: number;
  id: number;
}

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.buscarUsuarios();

    setInterval(() => {
      this.buscarUsuarios();
    }, 1000);
  }

  //GET
  buscarUsuarios(): void {
    this.userListService.buscarUsuarios().subscribe((resposta) => {
      this.usuarios = resposta;
    });
  }

  //DELETE
  removerUsuario(id: number): void {
    this.userListService.removerUsuario(id).subscribe(() => {
      this.buscarUsuarios();
    });
  }
}
