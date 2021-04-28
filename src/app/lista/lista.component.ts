import { Component, OnInit } from '@angular/core';
import{Usuarios,listaUsuarios} from '../usuarios';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  Lista:Array<Usuarios>=listaUsuarios;

  constructor() { }

  ngOnInit(): void {
    console.log(this.Lista);
  }

}
