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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsuarios();

    setInterval(() => {
      this.fetchUsuarios();
    }, 1000);
  }

  fetchUsuarios(): void {
    this.http.get<Usuario[]>('http://localhost:8080/dados/dados')
      .subscribe((resposta) => {
        this.usuarios = resposta;
      });
  }

  removerUsuario(id: number): void {
    this.http.delete<Usuario[]>('http://localhost:8080/dados/' + id)
      .subscribe(() => {
        this.fetchUsuarios();
      });
  }
}
