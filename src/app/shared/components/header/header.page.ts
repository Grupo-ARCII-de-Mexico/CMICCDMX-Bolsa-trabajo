import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { GenericService } from '../../services/generic-service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HeaderPage implements OnInit {

  constructor(
    private fb:FormBuilder,
    private gS:GenericService,
    private toast:ToastrService
  ) { }
  participanteForm!:FormGroup
  ngOnInit() {
    this.participanteForm = this.fb.group({
      nombre:[null,Validators.required],
      telefono:[null,Validators.required],
      correo:[null,Validators.required],
      idiomas:[null,Validators.required],
      alcaldia:[null,Validators.required],
      competencias:[null,Validators.required],
      experiencia:[null,Validators.required],
      area:[null,Validators.required],
      sueldo:[null,Validators.required],
    })
  }

  file:any= {
    documento :  '',
    uri : ''
  };
  onFileSelected(event: any): void {
    this.file = {
      documento :  'Curriculum.pdf',
      uri :  event.target.files[0]
    }
    event.target.value = ''
  }

  click(){
    const fileInput = document.getElementById('curri') as HTMLInputElement;
    fileInput.click();
  }
  openModal=false;
  send(){
    const form = new FormData();
    form.append('curriculum',this.file.uri);
    form.append('nombre', this.participanteForm.controls['nombre'].value);
    form.append('telefono', this.participanteForm.controls['telefono'].value);
    form.append('correo', this.participanteForm.controls['correo'].value);
    this.gS.post('bolsa-participante',form).pipe(
      switchMap((res:any) => {
        return this.gS.update('bolsa-participante',res.id,this.participanteForm.value)
      })
    ).subscribe((res) =>{
      this.toast.success('Estate Atento a tu Correo','Recibido')
      this.openModal=false;
      this.participanteForm.reset()
      this.file = {
        documento :  '',
        uri :  ''
      }
    })
  }

  go(url:string){
    window.open(url,'_blank')
  }

}
