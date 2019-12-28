import { Component, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() pendientes = true;

  constructor( public deseosService: DeseosService, private router: Router, private alertController: AlertController ) { }

  listaSeleccionada( listaId: number ) {
    if ( this.pendientes ) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${listaId}`);
    }
  }

  borrarLista( listaId: number ) {
    this.deseosService.borrarLista(listaId);
  }

  async modificarNombreLista( listaId: number, nombre: string ) {
    const alert = await this.alertController.create({
      header: 'Editar nombre',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: nombre,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {}
      },
      {
        text: 'Crear',
        handler: ( data ) => {
          if ( data.titulo.length === 0 ) {
            return;
          }

          this.deseosService.modificarNombreLista(listaId, data.titulo);
        }
      }]
    });

    await alert.present();
  }

}
