import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimentacoesComponent } from './lista-movimentacoes.component';

describe('ListaMovimentacoesComponent', () => {
  let component: ListaMovimentacoesComponent;
  let fixture: ComponentFixture<ListaMovimentacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMovimentacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMovimentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
