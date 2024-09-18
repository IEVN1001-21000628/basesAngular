import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`<div> hola mundo </div>
  <h1> mi amor </h1>
  <hr>
  `,*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  duplicarNumeros(x:number):number{
    return x*2
  }

  alumno={
    matricula: 1234,
    nombre: 'Juan',
    fechaInscrito: new Date(),
    pago:2220
  };
}
