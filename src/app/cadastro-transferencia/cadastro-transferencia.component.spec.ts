import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTransferenciaComponent } from './cadastro-transferencia.component';

describe('CadastroTransferenciaComponent', () => {
  let component: CadastroTransferenciaComponent;
  let fixture: ComponentFixture<CadastroTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
