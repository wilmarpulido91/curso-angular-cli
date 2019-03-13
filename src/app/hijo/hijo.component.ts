import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
        <p>Este es el {{title}}</p>
        <ul>
            <li>{{propiedad_uno}}</li>
            <li id="uni">Aqui aparecera la universidad</li>
        </ul>
        <button (click)="mostrar()">Mostrar Universidad</button>
    `
})

export class HijoComponent {
    public title:string;

    @Input('saludo') propiedad_uno: string;
    @Input('nombre') propiedad_dos: any;

    @Output('enviarData') desde_el_hijo = new EventEmitter();

    constructor() {
        this.title = "Componente hijo";
    }

    ngOnInit() {
        this.enviar();
    }

    mostrar() {
        var elem = document.querySelector('#uni');
        elem.innerHTML = this.propiedad_dos.college;
    }

    enviar() {
        this.desde_el_hijo.emit({
            id: 2,
            nombre: 'Alberto Rodriguez',
            cargo: 'UX / UI',
            estudio: 'Profecional en Diseño'
        });
    }
}