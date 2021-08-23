import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencia } from 'src/app/interfaces/agencia.interface';
import { AgenciasService } from 'src/app/services/agencias.service';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css'],
  
})
export class AgenciasComponent implements OnInit {



  agencias : Agencia[] = [];

  constructor(
    private agenciasService: AgenciasService,
    private router : Router,
    private spinner: NgxSpinnerService
    ) {


  }

  ngOnInit(): void {
    this.spinner.show();
    if(localStorage.getItem('agencias') != null){
      this.agencias = JSON.parse(localStorage.getItem('agencias'));
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
    }else{
      this.agenciasService.listar().subscribe((data: Agencia[]) => { 
          this.agencias = data;
          localStorage.setItem('agencias', JSON.stringify(data));
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 5000);
      });
    }
  }

  editarAgencia(item:Agencia) {

    this.router.navigate(['agencias/editar',item.agencia])

  }


}
