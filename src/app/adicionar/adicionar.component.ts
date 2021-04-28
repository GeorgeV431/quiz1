import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,} from '@angular/forms';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})

export class AdicionarComponent implements OnInit {

  formulario:FormGroup;


  constructor(public fb:FormBuilder) {
    this.formulario=fb.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      gender:['',Validators.required],
      pais:['',Validators.required],
      ciudad:['',Validators.required],
    });

   }

  ngOnInit(): void {
  }

  Crear(){
    console.log(this.formulario.value)
  }


}