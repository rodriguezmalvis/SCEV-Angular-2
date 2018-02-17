import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosEstoqueComponent } from './lista-produtos-estoque.component';

describe('ListaProdutosEstoqueComponent', () => {
  let component: ListaProdutosEstoqueComponent;
  let fixture: ComponentFixture<ListaProdutosEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutosEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutosEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
