import { Component } from '@angular/core';

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
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];

  nome: string = '';
  cargo: string = '';
  idade: number = 0;
  id: number = 0;

  constructor() {
    const user1: Usuario = {
      nome: 'teste1',
      cargo: 'cargo1',
      idade: 1,
      id: 1
    };

    this.usuarios = [user1];
  }

  adicionarUsuario(nome: string, cargo: string, idade: number, id: number): void {
    const newUser: Usuario = {
      nome: nome,
      cargo: cargo,
      idade: idade,
      id: id
    };

    this.usuarios.push(newUser);
  }

  removerUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(user => user.id !== id);
  }
}
