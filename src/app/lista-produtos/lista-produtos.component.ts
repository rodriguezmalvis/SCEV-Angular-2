import { Component, OnInit } from '@angular/core';
import { Produto } from '../cadastro-produto/produto';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private http: Http, private cookieService: CookieService) {

    http.get('http://localhost:8080/produto/lista.json')
            .map(res => res.json())
            .subscribe(
              produtos =>
                (
                  this.listaProdutos = produtos
                ),
                erro => console.log(erro)
            );

   }

  ngOnInit() {
  }

  salvaIdProduto(idProduto){

    this.cookieService.put("idProduto",idProduto);

  }

}
