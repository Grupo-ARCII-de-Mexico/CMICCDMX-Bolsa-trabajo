import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic-service';

@Component({
  selector: 'app-bolsa-postulantes',
  templateUrl: './bolsa-postulantes.page.html',
  styleUrls: ['./bolsa-postulantes.page.scss'],
})
export class BolsaPostulantesPage implements OnInit {

  constructor(
    private genericService: GenericService
  ) { }
postulantes:any[] = [];
  ngOnInit() {
    this.genericService.getAll('bolsa-participante').subscribe((data: any) => {
      this.postulantes = data;
    });
  }

  go(uri:string | undefined){
    if(uri !== ('null' || null)){
      window.open(uri,'_blank')
    }
  }
search!:string;
}
