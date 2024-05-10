import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SliderRepository } from 'src/app/shared/repos/slider.repo';
import { MetaService } from 'src/app/shared/services/meta.service';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element';


register();
@Component({
  selector: 'app-bolsa-trabajo-web',
  templateUrl: './bolsa-trabajo-web.page.html',
  styleUrls: ['./bolsa-trabajo-web.page.scss'],
})
export class BolsaTrabajoWebPage implements OnInit {
  paginationConfig = {
    el: '.swiper-pagination', // Selector CSS del elemento que contendrá la paginación
    type: 'bullets', // Tipo de paginación (otros tipos incluyen 'fraction', 'progressbar', etc.)
    clickable: true // Permite hacer clic en los puntos de paginación para cambiar de slide
  };
  breakpoints={
    // Cuando la ventana tiene un ancho mayor o igual a 1024px (pantallas grandes)
    1024: {
      slidesPerView: 3,
    },
    // Cuando la ventana tiene un ancho mayor o igual a 768px pero menor que 1024px (tablets)
    768: {
      slidesPerView: 3,
    },
    // Cuando la ventana tiene un ancho menor a 768px (teléfonos)
    567: {
      slidesPerView: 2,
    },
    167: {
      slidesPerView: 1,
    },
  };
  @ViewChild('SwiperBol') mySwiper?: ElementRef ;
  constructor(
    private sliderRepo:SliderRepository,
    @Inject(PLATFORM_ID) private platform:Object,
    private metaS:MetaService,
    private modalC:ModalController
  ) { }
  sliders:any
  ngOnInit() {
    this.sliderRepo.slider$.subscribe((res:any) =>{
      this.sliders=res.sort((a:any,b:any) => a.position - b.position)
      if(res.length>0){
        this.metaS.update('BOLSA DE TRABAJO | CIUDAD DE MÉXICO','Sitio Oficial CMICCDMX',this.uri+this.sliders[0].imagen);
      }
    })
  }

  uri= environment.image + "sliders/"
  go(uri:string | undefined){
    if(uri !== ('null' || null)){
      window.open(uri,'_blank')
    }
  }


}
