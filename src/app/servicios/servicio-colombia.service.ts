import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioColombiaService {
  constructor(private http: HttpClient) { 
    

  }


  public getDepartamentos(){
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');

  }
}
