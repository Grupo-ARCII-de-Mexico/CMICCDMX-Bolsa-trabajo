import { Pipe, PipeTransform } from '@angular/core';
import { eliminarObjetosRepetidos } from '../tools/filtrarRepetidos';

@Pipe({
  name: 'bolsaTrabajoPostulanteSearch'
})
export class FiltroBolsaTrabajoPostulantePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
      if(!arg ){
        return value
      }
      if(value  ){
        for(const post of value){
          if(post?.nombre?.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPosts.push(post);
          }
          if(post?.area?.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultPosts.push(post);
          }
        
        }
      }

    return eliminarObjetosRepetidos(resultPosts);
  }

}