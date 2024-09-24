import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
     {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year":"febrero 2 2020",
      "Precio":2000,
      "Color":"Azul",
      "Marca":"AUDI",
      "ImagenURL":"https://img.remediosdigitales.com/453ca3/nissan-sentra-2020-portada/1366_2000.jpg"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Year":"marzo 12 2021",
      "Precio":2500,
      "Color":"Blanco",
      "Marca":"NISSAN",
      "ImagenURL":"https://www.audicenteroaxaca.com.mx/content/dam/iph/international/mx/MEX00000/teaser/c4_editorial_1130x636_a4_01_2022.jpg/_jcr_content/renditions/cq5dam.thumbnail.1536.864.iph.png?imwidth=294&imdensity=1"
    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas",
      "Year":"febrero 2 2023",
      "Precio":45126,
      "Color":"Rojo",
      "Marca":"KIA",
      "ImagenURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2018_Kia_Rio_EX_-_Side.jpg/1200px-2018_Kia_Rio_EX_-_Side.jpg"
    } 
  ]
}
