import { Component, OnInit } from '@angular/core';
import {ServicioColombiaService} from './../../servicios/servicio-colombia.service';

@Component({
  selector: 'app-sw3',
  templateUrl: './sw3.component.html',
  styleUrls: ['./sw3.component.css']
})
export class Sw3Component implements OnInit {

  conversion: any;
  arreglo: [];

  constructor(private _servicio:ServicioColombiaService) { }

  ngOnInit(){
    this._servicio.getDepartamentos()
    .subscribe(
      (response)
    )
  }

}
