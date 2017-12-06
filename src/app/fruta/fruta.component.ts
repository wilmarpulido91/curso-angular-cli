import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls:  ['./fruta.component.css']
})

export class FrutaComponent{
  public nombre_componente = 'Componente de frutas';
  public listado_frutas = 'Naranja, Manzana, Pera, Piña';

  // Algunas variables en Angular 4
  public nombre:string;
  public edad:number;
  public mayorEdad:boolean;
  public trabajos:Array<any> = ['Programador', 10, 'Diseñador'];
  comodin:any;

  // Contructor en Agular 4
  constructor(){
    this.nombre = "Wilmar Pulido";
    this.edad = 26;
    this.mayorEdad = true;
    this.comodin = "Si";
  }

  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad();
    console.log(this.nombre);
    console.log('En 40 años tendras: ' + this.edad + ' años');
  }

  // Funcion o metodo en Angular 4
  cambiarNombre(){
    this.nombre = this.nombre + " " + this.trabajos[0];
  }

  cambiarEdad(){
    this.edad = this.edad + 40;
  }
}
