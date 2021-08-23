import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/interfaces/agencia.interface';
import { AgenciasService } from 'src/app/services/agencias.service';

@Component({
  selector: 'app-agencias-detalle',
  templateUrl: './agencias-detalle.component.html',
  styleUrls: ['./agencias-detalle.component.css']
})
export class AgenciasDetalleComponent implements OnInit {

  objAgencia : Agencia = {
    agencia : '',
    departamento : '',
    direccion : '',
    distrito : '',
    provincia : '', 
    lat : 0,
    lon : 0

  };

  constructor(
    private activate: ActivatedRoute,
    private service : AgenciasService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(data => {
      let agencia = this.service.obtener(data.nombre);
      console.log(agencia);

      this.objAgencia = agencia;

    });
  }

  actualizarAgencia(){
    this.service.actualizar(this.objAgencia);
    this.router.navigate(['agencias']);
  }

}
