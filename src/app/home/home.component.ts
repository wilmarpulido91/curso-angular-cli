import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})

export class HomeComponent {
  public titulo_home:string;
  public listado_ropa:Array<string>;
  public prenda_add:string;

  constructor(
  	private _ropaService: RopaService
  ){
    this.titulo_home = "PAGINA PRINCIPAL";
  }

  ngOnInit(){
  	this.listado_ropa = this._ropaService.getRopa();
  }

  guardarRopa(){
  	this._ropaService.addRopa(this.prenda_add);
  	this.prenda_add = null;
  }

  eliminarRopa(index:number){
  	this._ropaService.deleteRopa(index);
  	console.log(index);
  }
}
