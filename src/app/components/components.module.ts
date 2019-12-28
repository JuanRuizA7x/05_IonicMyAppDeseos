import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { FiltroPipe } from '../pipes/filtro.pipe';



@NgModule({
  declarations: [
    ListasComponent,
    FiltroPipe
  ],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
