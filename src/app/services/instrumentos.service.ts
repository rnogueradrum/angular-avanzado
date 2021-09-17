import { Injectable } from '@angular/core';
import { Instrumento } from '../models/instrumento.model';


// Imports para trabajar con FIREBASE
import { collection, Firestore, collectionData, DocumentData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {

  // Colección de instrumentos que recogeremos de FIREBASE FIRESTORE
  private instrumentosCollection: AngularFirestoreCollection<Instrumento>;

  // Observable de la lista de instrumentos. Devolverá una lista actualizada
  private _instrumentos$: Observable<Instrumento[]>;

  constructor(private _dbInstrumentos: AngularFirestore) {
    // Recogemos la lista de instrumentos de la FIRESTORE
    this.instrumentosCollection = _dbInstrumentos.collection<Instrumento>('id');
    // Nombre de la tabla en FIREBASE: ('instrumentos')

    // Binding automático con cambios en la collección
    this._instrumentos$ = this.instrumentosCollection!.snapshotChanges().pipe(
      map( (actions) => {
        return actions.map( (action) => {
          const data = action.payload.doc.data(); // Los datos del documento (instrumento), sin el ID
          // const clasificacion = action.payload.doc.data().clasificacion.toString;
          // console.table(clasificacion)
          console.log('DATA')
          console.table(data);
          data.id = action.payload.doc.id; // El ID del instrumento
          return {...data}; // {id, nombre, clasificación, origen} de cada documento
        });
      })
    );
  } // End of constructor

  // Métodos CRUD para la gestión de datos de FIREBASE

  /**
   * getAllInstrumentosFireBase(): Observable<Instrumento[]>
   * @returns Lista con todos los Instrumentos
   */
  getAllInstrumentosFireBase(): Observable<Instrumento[]> {
  return this._instrumentos$;
  }
  // Actualizar instrumento
  updateInstrumentoFireBase(instrumento: Instrumento, id: string): Promise<void> {
    return this.instrumentosCollection!.doc<Instrumento>(id).update(instrumento);
  }

  // Crear instrumento
  createInstrumentoFireBase(instrumento: Instrumento): any{
    return this.instrumentosCollection!.add(instrumento);
  }

  // Eliminar instrumento

  deleteInstrumentoFireBase(id:string): Promise<void> {
    return this.instrumentosCollection!.doc<Instrumento>(id).delete();
  }



} // End of class InstrumentosService
