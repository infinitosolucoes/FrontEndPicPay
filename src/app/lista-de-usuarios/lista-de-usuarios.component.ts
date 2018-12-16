import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {

  usuarios: Array<any>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}
  
  buscar() {
    this.listar();
  }

  listar(){
    this.usuarioService.listar().subscribe(dados => this.usuarios = dados);
  }

}
