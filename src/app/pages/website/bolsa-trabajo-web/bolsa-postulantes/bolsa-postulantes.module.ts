import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsaPostulantesPageRoutingModule } from './bolsa-postulantes-routing.module';

import { BolsaPostulantesPage } from './bolsa-postulantes.page';
import { HeaderPage } from 'src/app/shared/components/header/header.page';
import { FooterWebComponent } from '../../componentes/footer-web/footer-web.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsaPostulantesPageRoutingModule,
    HeaderPage,
    FooterWebComponent,
    PipeModule
  ],
  declarations: [BolsaPostulantesPage]
})
export class BolsaPostulantesPageModule {}
