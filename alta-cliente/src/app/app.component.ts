import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alta-cliente';

  name:string = '';
  cif:string = '';
  direccion:string = '';
  grupo:string = '';

  listaClients: Array<object>= [];

  saveAlta() {
    this.listaClients.push({name: this.name,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo });

  }
}
