import { Component, OnInit } from '@angular/core';
import { Clasificacion } from 'src/app/models/Iinstrumento.interface';
import { Instrumento } from 'src/app/models/instrumento.model';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.scss']
})
export class InstrumentosComponent implements OnInit {


  instrumentos: Instrumento[] = [
    {
      nombre: 'Djembe',
      clasificacion: Clasificacion.PERCUSION,
      origen: 'Ghana'
    },
    {
      nombre: 'Piano',
      clasificacion: Clasificacion.TECLA,
      origen: 'Alemania'
    },
    {
      nombre: 'Flauta',
      clasificacion: Clasificacion.VIENTO,
      origen: 'Egipto'
    },
    {
      nombre: 'Guitarra',
      clasificacion: Clasificacion.CUERDA,
      origen: 'España'
    }
  ];

  displayedColumns: string[] = ['nombre', 'clasificacion', 'origen', 'edit'];

  constructor() {

  }

  ngOnInit(): void {
  }

  // TODO EDICIÓN Y BORRADO EN LA TABLA
  // TODO REDUX: DETALLE LEIDO DE LA STORE

}
