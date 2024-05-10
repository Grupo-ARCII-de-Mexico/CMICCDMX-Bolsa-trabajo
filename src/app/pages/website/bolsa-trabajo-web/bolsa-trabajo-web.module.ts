import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsaTrabajoWebPageRoutingModule } from './bolsa-trabajo-web-routing.module';

import { BolsaTrabajoWebPage } from './bolsa-trabajo-web.page';
import { FooterWebComponent } from '../componentes/footer-web/footer-web.component';
import { HeaderPage } from 'src/app/shared/components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsaTrabajoWebPageRoutingModule,
    HeaderPage,
    FooterWebComponent
  ],
  declarations: [BolsaTrabajoWebPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BolsaTrabajoWebPageModule {}
