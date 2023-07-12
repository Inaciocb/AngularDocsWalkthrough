import { Component } from '@angular/core';
import { UserListService, Dados } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  dados: Dados = new Dados();
  dadosEnviados: Dados | null = null;

  constructor(private userListService: UserListService) { }

  adicionarUsuario(): void {
    this.userListService.enviarDados(this.dados).subscribe(response => {
      this.dadosEnviados = response;
    });
  }

  editarDados(): void {
    this.userListService.atualizarUsuario(this.dados).subscribe(response => {
      this.dadosEnviados = response;
    });
  }

  removerUsuario(id: number): void {
    this.userListService.removerUsuario(id).subscribe(response => {
      this.dadosEnviados = response;
    });
  }

}
