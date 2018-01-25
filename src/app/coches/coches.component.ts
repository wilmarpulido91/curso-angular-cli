import { Component } from '@angular/core';
import { Coche } from './coches';
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	styleUrls: ['./coches.component.css'],
	providers: [PeticionesService]
})

export class CochesComponent {
	public titulo_coches = "Pagina de coches";
	public coche:Coche;
	public coches:Array<Coche>;
	public articulos:Array<Object>;

	constructor(
		private _peticion:PeticionesService
	) {
		this.coche = new Coche("","","");
		this.coches = [];
		this.articulos = [];
	}

	ngOnInit() {
		this._peticion.getLibros().subscribe(
			result => {
				this.articulos = result.data;
				console.log(this.articulos);
			},
			error => {
				var mensaje_error = <any>error;
				console.log(mensaje_error);
			}
		);
	}

	onSubmit() {
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
		console.log(this.coches);
	}
}