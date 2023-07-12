import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http: HttpClient) { }

  // GET
  buscarUsuarios(): Observable<Dados[]> {
    return this.http.get<Dados[]>('http://localhost:8080/dados/dados');
  }

  // POST
  enviarDados(dados: Dados): Observable<Dados> {
    return this.http.post<Dados>('http://localhost:8080/dados', dados);
  }

  // PUT
  atualizarUsuario(dados: Dados): Observable<Dados> {
    return this.http.put<Dados>('http://localhost:8080/dados', dados);
  }

  // DELETE
  removerUsuario(id: number): Observable<Dados> {
    return this.http.delete<Dados>('http://localhost:8080/dados/' + id);
  }
}

export class Dados {
  idade: number = 0;
  nome: string = '';
  cargo: string = '';
  id: number = 0;
}
