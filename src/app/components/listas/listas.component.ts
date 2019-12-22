import { Component, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() pendientes = true;

  constructor( public deseosService: DeseosService, private router: Router ) { }

  listaSeleccionada( listaId: number ) {
    if ( this.pendientes ) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${listaId}`);
    }
  }

}
