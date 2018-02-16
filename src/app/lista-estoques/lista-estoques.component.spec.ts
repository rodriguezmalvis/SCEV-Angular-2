import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstoquesComponent } from './lista-estoques.component';

describe('ListaEstoquesComponent', () => {
  let component: ListaEstoquesComponent;
  let fixture: ComponentFixture<ListaEstoquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstoquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
