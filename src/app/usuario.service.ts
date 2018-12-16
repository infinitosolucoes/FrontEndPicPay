import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // urlUsuario = 'http://localhost:8080/usuarios';
  urlUsuario = 'http://localhost:8080/contatos';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.urlUsuario}`);
  }

}
