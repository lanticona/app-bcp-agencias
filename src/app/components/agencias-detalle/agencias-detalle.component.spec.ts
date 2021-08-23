import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasDetalleComponent } from './agencias-detalle.component';

describe('AgenciasDetalleComponent', () => {
  let component: AgenciasDetalleComponent;
  let fixture: ComponentFixture<AgenciasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
