import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { 
    const user1: Usuario = {
      nome: 'teste1',
      cargo: 'cargo1',
      idade: 1,
      id: 1
    };

  }

  ngOnInit(): void {
    this.http.get<Usuario[]>('http://localhost:8080/dados/dados')
      .subscribe((resposta) => {
        this.usuarios = resposta;
      });
  }
}
