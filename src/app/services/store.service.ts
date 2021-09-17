import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _store: Store<any>) { }

  // Método para obtener un estado de la aplicación
  obtenerInstrumentoState(estado: string) {
    return this._store.select(estado)
  }

  // Método para despachar/emitir la acción y generar el nuevo estado a través del reducer que escucha dicha acción
  actualizaInstrumentoState(action: any) {
    this._store.dispatch(
      {
        type: action.type,
        payload: action.payload
      }
    );
  }
}
