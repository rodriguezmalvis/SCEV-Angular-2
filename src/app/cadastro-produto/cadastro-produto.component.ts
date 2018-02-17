import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { Http, Headers } from '@angular/http';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  tipos: Object[] = [];

  constructor(private formService: FormService, cookieService: CookieService) {

    if(cookieService.get("idProduto") !== undefined){
        formService.getProduto(cookieService.get("idProduto"))
        .subscribe(
            resposta => (
                this.produto = resposta.produto
            ),
            erro => (
                console.log(erro)
            )
        );
        cookieService.remove("idProduto");
    }

    formService.getTiposProduto()
            .subscribe(
                tipos =>
                (
                  this.tipos = tipos
                ),
                erro => console.log(erro)
            );

   }

  ngOnInit() {
  }

  cadastra(){
      console.log(this.produto);

          this.formService.cadastraProduto(this.produto)
              .subscribe(() => {
                  this.produto = new Produto();
                  console.log('Produto salvo com sucesso');
              }, erro =>  console.log(erro));
    }
}
