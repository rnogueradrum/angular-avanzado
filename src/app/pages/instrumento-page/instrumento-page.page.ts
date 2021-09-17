import { Component, OnInit } from '@angular/core';
import { Clasificacion } from 'src/app/models/Iinstrumento.interface';
import { Instrumento } from 'src/app/models/instrumento.model';
import { StoreService } from 'src/app/services/store.service';
import { IInstrumentoState } from 'src/app/store/states/instrumentoState.interface';

@Component({
  selector: 'app-instrumento-page',
  templateUrl: './instrumento-page.page.html',
  styleUrls: ['./instrumento-page.page.scss']
})
export class InstrumentoPagePage implements OnInit {


   instrumento: Instrumento = {
    id: '',
    nombre: '',
    clasificacion: Clasificacion.OTROS,
    origen: '',
    //imagen: ''
  }
  fireBaseId: string = '';


  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
  /**
   * **********************************************************
   * Obtiene el detalle del instrumento de la REDUX-STORE-STATE
   * **********************************************************
   *
   * */
    this._storeService.obtenerInstrumentoState('instrumentoState').subscribe(
      (state: IInstrumentoState) => {
        console.log('obtenerInstrumentoState: state:')
        console.table(state);
        this.instrumento = state.instrumento;
        //this.fireBaseId = state.
        console.log('obtenerInstrumentoState: INSTRUMENTO:')
        console.table(this.instrumento);
        //console.log(`obtenerInstrumentoState: state: ${state}`)


      },
      (error) => alert(`Ha habido un error al cargar los datos de userState: ${error}`),
      () => console.log(`Datos de userState cargados con éxito`)
    );
  }

}
