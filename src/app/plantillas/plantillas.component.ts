import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html',
	styleUrls: ['./plantillas.component.css']
})

export class PlantillasComponent {
	public titulo:string;
	public admin:boolean;

	constructor() {
		this.titulo = "Plantillas ngTemplate";
		this.admin = false;
	}

	cambiar(value) {
		this.admin = value;
	}
}