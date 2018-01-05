import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  public titulo_contacto = "Esta es la pagina de contacto";
  public parametro;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params:Params) => {
      this.parametro = params['valor'];
      console.log(this.parametro);
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','wilmarpulido']);
  }

  redirigir_inicio(){
    this._router.navigate(['/home']);
  }
}
