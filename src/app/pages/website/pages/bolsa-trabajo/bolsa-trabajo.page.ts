import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BolsaTrabajo, BolsaTrabajoRepository } from 'src/app/shared/repos/bolsaTrabajo.repository';
import { HeaderStatusService } from 'src/app/shared/services/active-header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bolsa-trabajo',
  templateUrl: './bolsa-trabajo.page.html',
  styleUrls: ['./bolsa-trabajo.page.scss'],
})
export class BolsaTrabajoPage implements OnInit {
  search: string ='';
  uri: string = environment.image + 'bolsa-trabajo-logos/'
  constructor(
    public headerStatusService:HeaderStatusService,
    private bolsaRepo:BolsaTrabajoRepository
  ) { }
bolsa:BolsaTrabajo[]=[]
  ngOnInit() {
    this.bolsaRepo.BolsaTrabajo$.subscribe((res:any) => {
      this.bolsa=res;
    })
  }

  mon(date:Date){
    return moment(date).locale('ES').format('LL')
  }

}
