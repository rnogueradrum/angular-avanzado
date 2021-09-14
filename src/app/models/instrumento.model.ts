import { Clasificacion, IInstrumento } from "./Iinstrumento.interface";

export class Instrumento implements IInstrumento  {

  nombre: string = '';
  clasificacion = Clasificacion.OTROS;
  origen: string = '';
}
