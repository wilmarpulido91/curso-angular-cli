import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService {

	public url:string;
	public url_alt:string;

	constructor(private _http:Http) {
		this.url = "https://jsonplaceholder.typicode.com/posts";
		this.url_alt = "../../assets/libros.json";
	}

	getPrueba() {
		return 'Hola desde el servicio';
	}

	getArticulos() {
		return this._http.get(this.url).map(res => res.json());
	}

	getLibros() {
		return this._http.get(this.url_alt).map(res => res.json());
	}

}