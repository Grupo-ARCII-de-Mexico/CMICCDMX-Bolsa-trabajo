import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsaTrabajoDetallesPageRoutingModule } from './bolsa-trabajo-detalles-routing.module';

import { BolsaTrabajoDetallesPage } from './bolsa-trabajo-detalles.page';
import { HeaderWebComponent } from '../../componentes/header-web/header-web.component';
import { FooterWebComponent } from '../../componentes/footer-web/footer-web.component';
import { HeaderPage } from 'src/app/shared/components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsaTrabajoDetallesPageRoutingModule,
    HeaderPage,
    FooterWebComponent,
    ReactiveFormsModule
  ],
  declarations: [BolsaTrabajoDetallesPage]
})
export class BolsaTrabajoDetallesPageModule {}
