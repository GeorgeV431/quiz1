import { Component, OnInit } from '@angular/core';
import{Usuarios,listaUsuarios} from '../usuarios';

@Component({
  selector: 'app-vista-card',
  templateUrl: './vista-card.component.html',
  styleUrls: ['./vista-card.component.scss']
})
export class VistaCardComponent implements OnInit {
  
  Lista:Array<Usuarios>=listaUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
