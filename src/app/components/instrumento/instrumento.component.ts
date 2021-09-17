import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clasificacion } from 'src/app/models/Iinstrumento.interface';
import { Instrumento } from 'src/app/models/instrumento.model';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.scss']
})
export class InstrumentoComponent implements OnInit {
  clasificacion = Clasificacion;
  keys: string[] = [];

  formulario: FormGroup = this._formBuilder.group({});

  instrumento: Instrumento = {
    id: '',
    nombre: '',
    clasificacion: Clasificacion.OTROS,
    origen: '',
    //imagen: ''
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Definimos la estructura y los campos del formulario a través del formBuilder y sus funciones.
  this.formulario = this._formBuilder.group({
    nombre: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    clasificacion: ['',Validators.required],
    origen: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    //avatar: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
  });


  this.keys = Object.keys(this.clasificacion);
  console.log('KEYS');
  console.table(this.keys);

}

  crearInstrumento(instrumento: Instrumento) {

    // RECUPERAMOS EL INSTRUMENTO DEL FORMULARIO
    if (this.formulario.valid) {

    instrumento = {
      ...this.formulario.value
      };


    console.table(instrumento);


    }else console.log (`Formulario inválido`);

  }




}
