// Escucha las instrumentoActions y devuelve el nuevo instrumentoState
// Utiliza el type y el payload

import { Clasificacion } from "src/app/models/Iinstrumento.interface";
import { Instrumento } from "src/app/models/instrumento.model";
import { ACTION_ACTUALIZAR_DETALLE } from "../actions/instrumentoActions";
import { IInstrumentoState } from "../states/instrumentoState.interface";

const instrumentoStateInicial: IInstrumentoState = {
    instrumento: new Instrumento

}

export function instrumentoReducer(state = instrumentoStateInicial, action:any): IInstrumentoState {

  // Evalúa el tipo de acción (sólo una en nuestro caso) y devuelve el nuevo instrumentoState

  switch (action.type) {
    case ACTION_ACTUALIZAR_DETALLE:
      return {
        ...state,
        instrumento: action.payload
      }
  }
  return state;
}
