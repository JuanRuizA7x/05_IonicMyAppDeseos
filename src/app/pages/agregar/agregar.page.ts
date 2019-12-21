import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-tem.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista;
  nombreItem = '';

  constructor( private deseosServie: DeseosService, private activatedRouted: ActivatedRoute ) { 
    const listaId = activatedRouted.snapshot.paramMap.get('listaId');
    this.lista = deseosServie.obtenerLista(listaId);
    console.log();
  }

  agregarItem() {
    if (this.nombreItem.length > 0) {
      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push(nuevoItem);

      this.nombreItem = '';

      this.deseosServie.guardarStorage();
    }
  }

}
