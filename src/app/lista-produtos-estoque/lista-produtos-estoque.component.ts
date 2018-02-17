import { Component, OnInit } from '@angular/core';
import { ProdutoEstoque } from '../cadastro-movimentacao/produto-estoque';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-lista-produtos-estoque',
  templateUrl: './lista-produtos-estoque.component.html',
  styleUrls: ['./lista-produtos-estoque.component.css']
})
export class ListaProdutosEstoqueComponent implements OnInit {

  listaProdutos: ProdutoEstoque[] = [];

  constructor(formService: FormService, cookieService: CookieService) { 

    formService.getProdutosEstoque(cookieService.get("idEstoque"))
    .subscribe(
      produtos => (
        this.listaProdutos = produtos
      ),
      erro => (
        console.log(erro)
      )
    );

  }

  ngOnInit() {
  }

}
