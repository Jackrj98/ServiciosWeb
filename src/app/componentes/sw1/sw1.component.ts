import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sw1',
  templateUrl: './sw1.component.html',
  styleUrls: ['./sw1.component.css']
})
export class Sw1Component implements OnInit {
  conversion:any;
  arreglo: [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json').subscribe(data => {
      this.conversion = data;
      this.arreglo = this.conversion;
      console.log('prueba sw ', this.arreglo);
    });
  }

}
