import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaCardComponent} from '../app/vista-card/vista-card.component';
import {ListaComponent} from '../app/lista/lista.component';
import {AdicionarComponent} from '../app/adicionar/adicionar.component';



const routes: Routes = [
  {path: 'vistaCard',component:VistaCardComponent}
  ,{path: 'lista',component:ListaComponent}
  ,{path: 'adicionar',component:AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
