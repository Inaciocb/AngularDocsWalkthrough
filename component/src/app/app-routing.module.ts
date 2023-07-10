import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'bitcoin', component: BitcoinComponent },
  {path: 'lista-usuarios', component: ListaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
