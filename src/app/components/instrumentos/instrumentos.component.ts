import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clasificacion } from 'src/app/models/Iinstrumento.interface';
import { Instrumento } from 'src/app/models/instrumento.model';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { StoreService } from 'src/app/services/store.service';
import { ACTION_ACTUALIZAR_DETALLE } from 'src/app/store/actions/instrumentoActions';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.scss']
})
export class InstrumentosComponent implements OnInit {


  instrumentosDataSource: Instrumento[] = [];
  cargandoTabla: boolean = true;

  displayedColumns: string[] = ['id','nombre', 'clasificacion', 'origen', 'detalle'];

  constructor(
            private _instrumentosService: InstrumentosService,
            private _router: Router,
            private _storeService: StoreService
            )
            {}

  ngOnInit(): void {
    /**
   * **********************************************************
   *      Obtiene la lista de instrumentos de BBDD FIREBASE
   * **********************************************************
   *
   * */
    this._instrumentosService.getAllInstrumentosFireBase().subscribe(
      (respuesta) => {
        console.log('Instrumentos respuesta de BBDD FIREBASE', respuesta);
        console.table(respuesta);

        this.instrumentosDataSource = respuesta as Instrumento[];
        this.cargandoTabla = false;

        console.log('InstrumentosDataSource');
        console.table(this.instrumentosDataSource);
      },
      (error) => alert(`Ha ocurrido un error al cargar los instrumentos: ${error}`),
      () => console.log('Instrumentos cargados con éxito')
    )
  }


  irADetalleInstrumento(instrumento: Instrumento) {
    // ACTUALIZA EL VALOR DE LA REDUX-STORE-STATE CON EL INSTRUMENTO SELECCIONADO
    this._storeService.actualizaInstrumentoState({
      type: ACTION_ACTUALIZAR_DETALLE,
      payload: instrumento
    })

  }

}
