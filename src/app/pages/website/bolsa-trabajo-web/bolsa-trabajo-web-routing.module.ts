import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolsaTrabajoWebPage } from './bolsa-trabajo-web.page';

const routes: Routes = [
  {
    path: '',
    component: BolsaTrabajoWebPage
  },
  {
    path: 'bolsa-trabajo',
    loadChildren: () => import('../pages/bolsa-trabajo/bolsa-trabajo.module').then( m => m.BolsaTrabajoPageModule)
  },
  {
    path: 'bolsa-postulante',
    loadChildren: () => import('./bolsa-postulantes/bolsa-postulantes.module').then( m => m.BolsaPostulantesPageModule)
  },
  {
    path: 'bolsa-trabajo/:identificador',
    loadChildren: () => import('../pages/bolsa-trabajo-detalles/bolsa-trabajo-detalles.module').then( m => m.BolsaTrabajoDetallesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolsaTrabajoWebPageRoutingModule {}
