import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    FormularioComponent,   
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
