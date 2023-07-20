import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService, Dados } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  userId: number = 0;
  dados: Dados = new Dados();
  dadosEnviados: Dados | null = null;
  
  constructor(private route: ActivatedRoute, private userListService: UserListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.buscarUsuario();
    });
  }

  buscarUsuario(): void {
    this.userListService.buscarUsuarioPorId(this.userId).subscribe(response => {
      this.dados = response;
    });
  }

  editarDados(): void {
    this.dados.id = this.userId;
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
  