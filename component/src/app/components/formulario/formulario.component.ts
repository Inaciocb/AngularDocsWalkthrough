import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from 'src/app/components/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  dados: Dados = new Dados();
  dadosEnviados: Dados | null = null;

  constructor(private http: HttpClient) { }

  enviarDados(): void {
    this.http.post<Dados>('http://localhost:8080/dados', this.dados)
      .subscribe(response => {
        this.dadosEnviados = response;
      });
  }

  editarDados(): void {
    this.http.put<Dados>('http://localhost:8080/dados', this.dados)
      .subscribe(response => {
        this.dadosEnviados = response;
      });
  }

  removerUsuario(id: number): void {
    this.http.delete<Dados>('http://localhost:8080/dados/' + id)
      .subscribe(response => {
        this.dadosEnviados = response;
      });
  }


  adicionarUsuario(nome: string, cargo: string, idade: number, id: number): void {
    const newUser: Dados = {
      nome: nome,
      cargo: cargo,
      idade: idade,
      id: id
    };
  }

}
 
export class Dados {
  idade: number = 0;
  nome: string = '';
  cargo: string = '';
  id: number = 0;
}
  