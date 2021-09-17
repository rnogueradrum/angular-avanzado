export interface IInstrumento {
  id: string,
  nombre: string,
  clasificacion: string,
  origen: string

}

export enum Clasificacion {
  VIENTO = 'VIENTO',
  CUERDA = 'CUERDA',
  PERCUSION = 'PERCUSION',
  TECLA = 'TECLA',
  OTROS = 'OTROS'
}
