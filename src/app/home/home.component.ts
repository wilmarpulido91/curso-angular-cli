import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public titulo_home:string;

  constructor(){
    this.titulo_home = "PAGINA PRINCIPAL";
  }
}
