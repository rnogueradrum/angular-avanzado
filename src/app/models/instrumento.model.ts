import { Clasificacion, IInstrumento } from "./Iinstrumento.interface";

export class Instrumento implements IInstrumento  {
  id: string = '';
  nombre: string = '';
  clasificacion = Clasificacion.OTROS;
  origen: string = '';
}
