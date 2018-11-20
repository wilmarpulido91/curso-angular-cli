import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html',
	styleUrls: ['./plantillas.component.css']
})

export class PlantillasComponent {
	public titulo:string;
	public admin:boolean;
	public data:object;

	public nombre_externo = 'Wilmar Pulido';
	public params = {
		id: 1,
		cargo: 'Front End',
		college: 'Universidad Militar Nueva Granada'
	}

	constructor() {
		this.titulo = "Plantillas ngTemplate";
		this.admin = false;
	}

	cambiar(value) {
		this.admin = value;
	}

	recibirData(event) {
		let dato = document.querySelector('#dato');
		let array = Object.values(event);

		this.data = event;

		array.forEach(element => {
			let newLi = document.createElement('li');
			let value = document.createTextNode(element.toString());
			newLi.appendChild(value);
			dato.append(newLi);
		});
	}

}