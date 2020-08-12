import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  usuarios: any[]=[
    {
      nombre: 'Jack',
      titulo: 'Sistemas',
      username:'jack123'
    },
    {
      nombre: 'Johanna',
      titulo: 'Sistemas avanzados',
      username:'joha06'
    },
    {
      nombre: 'Manuel',
      titulo: 'data avanzados',
      username:'manu98'
    }
  ]

  constructor() {
    console.log("servicios funcionando");
   }
   obtenerServicio(){
     return this.usuarios;
   }
}
