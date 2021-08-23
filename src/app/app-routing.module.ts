import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciasDetalleComponent } from './components/agencias-detalle/agencias-detalle.component';
import { AgenciasComponent } from './components/agencias/agencias.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'agencias',
    pathMatch : 'full'
  },
  {
    path : 'agencias',
    component : AgenciasComponent
  },
  {
    path : 'agencias/editar/:nombre',
    component : AgenciasDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
