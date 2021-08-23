import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { AgenciasDetalleComponent } from './components/agencias-detalle/agencias-detalle.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";

@NgModule({
  declarations: [
    AppComponent,
    AgenciasComponent,
    AgenciasDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
