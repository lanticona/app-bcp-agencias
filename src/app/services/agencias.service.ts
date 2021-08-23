import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agencia } from '../interfaces/agencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AgenciasService {

  constructor(private http : HttpClient) { 
    //console.log(data);

  }

  listar() : Observable<Agencia[]>{
    return this.http.get<Agencia[]>('../../assets/data/agencias.json')
  }

  obtener(nombre : string) : Agencia{
    let data = JSON.parse(localStorage.getItem('agencias')) || [];
    let agencia = data.find( x => x.agencia == nombre);
    return agencia;
  }


  actualizar(item :Agencia){
    let data = JSON.parse(localStorage.getItem('agencias')) || [];
    let indice = data.findIndex( x => x.agencia == item.agencia);
    data[indice] = item;
    localStorage.setItem('agencias', JSON.stringify(data))
  }

}
