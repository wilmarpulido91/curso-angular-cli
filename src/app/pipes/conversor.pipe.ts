import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'multiplica'
})

export class MultiplicaPipe implements PipeTransform {
	transform(numero,por){
		let numero_uno = parseInt(numero);
		let numero_dos = parseInt(por);

		let result = numero_uno * numero_dos;

		return result;
	}
}