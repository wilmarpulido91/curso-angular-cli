import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent {
  public titulo_component:string;
  public color:string;
  public color2:string;
  public color_select:string;
  public empleados:Array<Empleado>;

  constructor(){
    this.titulo_component = 'Empleados';
    this.color = 'blue';
    this.color2 = 'black';
    this.color_select = '';
    this.empleados = [
      new Empleado('Lorem ipsum', 22, 'Front End Jr', 'Soltero', true),
      new Empleado('Lorem ipsum', 28, 'Fron End Sr', 'Soltera', true),
      new Empleado('Lorem ipsum', 24, 'Back End Jr', 'Soltero', false),
      new Empleado('Lorem ipsum', 35, 'Back End Sr', 'Casado', false),
      new Empleado('Lorem ipsum', 60, 'SEO', 'Casado', true),
      new Empleado('Lorem ipsum', 40, 'Cocinera', 'Casada', true),
      new Empleado('Lorem ipsum', 18, 'Concerge', 'Soltero', true)
    ];
  }

  ngOnInit(){
    //console.log(this.empleados);
  }

  cambiarTipoContrato(){
    this.empleados.forEach(function(item){
      if(item.contratado == true){
        item.contratado = false;
      }
      else {
        item.contratado = true;
      }
    });
  }

  cambiarColorRojo(){
    this.color = 'red';
  }
  cambiarColorAzul(){
    this.color = 'blue';
  }
  cambiarColorVerde(){
    this.color = 'green';
  }

  cambiarColor(){
    switch(this.color){
      case 'red':
        this.color2 = 'red';
        break;
      case 'blue':
        this.color2 = 'blue';
        break;
      case 'green':
        this.color2 = 'green';
        break;
      default:
        this.color2 = 'black';
    }
  }

  consoleColor(){
    console.log(this.color_select);
  }
}
