import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  getListas() {
    return this.listas;
  }

  crearLista( titutlo: string ) {
    const nuevaLista = new Lista(titutlo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista( id: string | number ) {
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if ( localStorage.getItem('data') ) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  borrarLista( listaId: number) {
    let i = 0;

    while ( this.listas[i].id !== listaId ) {
      i++;
    }

    this.listas.splice(i, 1);

    this.guardarStorage();

  }

  modificarNombreLista( listaId: number, nombre: string ) {
    this.listas.forEach(element => {
      if ( element.id === listaId ) {
        element.titulo = nombre;
        this.guardarStorage();
      }
    });
  }

}
