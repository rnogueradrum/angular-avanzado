// Estructura del state instrumentoState
import { Instrumento } from "src/app/models/instrumento.model";

export interface IInstrumentoState {
  instrumento: Instrumento // Instrumento que se actualizará al ir a detalle en la lista de instrumentos y que será mostrado en el componente detalle del instrumento
}
