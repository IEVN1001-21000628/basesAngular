import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit{
  formulario!: FormGroup;
  name:string='';
  anos:number=0;
  china:string='';
  imageWidth:number=70;
  imageMargin:number=2;
  signos:string='';
  constructor(){}
  ngOnInit(): void {
    this.formulario=new FormGroup({
      nombre:new FormControl('', Validators.required),
      apellidoPa:new FormControl('', Validators.required),
      apellidoMa:new FormControl('', Validators.required),
      diaNac:new FormControl('', Validators.required),
      mesNac:new FormControl('', Validators.required),
      anoNac:new FormControl('', Validators.required),
    })
  }
  imprimirNombre(){
    const nombre=this.formulario.get('nombre')?.value;
    const apellidoPa=this.formulario.get('apellidoPa')?.value;
    const apellidoMa=this.formulario.get('apellidoMa')?.value;
    

    this.name=`${nombre} ${apellidoPa} ${apellidoMa}`;
  }
  calcularEdad(){
    const diaNac=this.formulario.get('diaNac')?.value;
    const mesNac=this.formulario.get('mesNac')?.value;
    const anoNac=this.formulario.get('anoNac')?.value;
    if (diaNac && mesNac && anoNac) {
      const hoy=new Date()
      const fechaNacimiento=new Date(anoNac, mesNac-1, diaNac)
      let edad=hoy.getFullYear()-fechaNacimiento.getFullYear();
      const diferenciaMes=hoy.getMonth()-fechaNacimiento.getMonth();
      const diferenciaDia=hoy.getDate()-fechaNacimiento.getDate();
      if (diferenciaMes<0||(diferenciaMes===0 && diferenciaDia<0)) {
        edad--;
      }
        this.anos=edad
    }
  }
  signoZodiacal(){
    const anoNac=this.formulario.get('anoNac')?.value;
    if (anoNac) {
      const animales=[
        'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
        'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
      ];
      const indice=(anoNac-1900)%12;
      const signo=animales[indice];
      this.china=signo;
    }
  }
  mostrarImagen(){
    const anoNac=this.formulario.get('anoNac')?.value;
    if (anoNac) {
      const imagenes=[
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg', //rata
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg', //buey
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg', //Tigre
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg', //Conejo
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg', //Dragon
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg', //serpiente
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg', //Caballo
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg', //cabra
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg', //mono
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg', //gallo
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg', //perro
        'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg', //cerdo
      ];
      const indice=(anoNac-1900)%12;
      this.signos=imagenes[indice]
    }
  }
}
