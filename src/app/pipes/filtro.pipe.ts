import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista [], terminada: boolean): Lista [] {
    return listas.filter( condicion =>  condicion.terminada !== terminada );
  }

}
