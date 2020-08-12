import { Component, OnInit } from '@angular/core';
import {ServicioService} from './../../servicio.service';

@Component({
  selector: 'app-sw2',
  templateUrl: './sw2.component.html',
  styleUrls: ['./sw2.component.css']
})
export class Sw2Component implements OnInit {

  arreglo: any[] = [];

  constructor(private _servicio: ServicioService) { 
    this.arreglo = _servicio.obtenerServicio();
  }

  ngOnInit(): void {
  }

}
