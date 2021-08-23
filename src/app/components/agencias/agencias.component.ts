import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencia } from 'src/app/interfaces/agencia.interface';
import { AgenciasService } from 'src/app/services/agencias.service';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {

  agencias : Agencia[] = [];

  constructor(
    private agenciasService: AgenciasService,
    private router : Router
    ) {


  }

  ngOnInit(): void {
    if(localStorage.getItem('agencias') != null){
      this.agencias = JSON.parse(localStorage.getItem('agencias'));
    }else{
      this.agenciasService.listar().subscribe((data: Agencia[]) => { 
          this.agencias = data;
          localStorage.setItem('agencias', JSON.stringify(data));
      });
    }
  }

  editarAgencia(item:Agencia) {

    this.router.navigate(['agencias/editar',item.agencia])

  }


}
