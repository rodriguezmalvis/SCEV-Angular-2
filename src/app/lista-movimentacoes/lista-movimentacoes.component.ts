import { Component, OnInit } from '@angular/core';
import { Movimentacao } from './movimentacao';
import { Http } from '@angular/http';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-lista-movimentacoes',
  templateUrl: './lista-movimentacoes.component.html',
  styleUrls: ['./lista-movimentacoes.component.css']
})
export class ListaMovimentacoesComponent implements OnInit {

  listaMovimentacoes: Movimentacao[] = [];

  constructor(http: Http, formService: FormService, cookieService: CookieService) {

    if(cookieService.get("idEstoque") === undefined){
      formService.getMovimentacoes()
            .subscribe(
              movimentacoes =>
                (
                  this.listaMovimentacoes = movimentacoes
                ),
                erro => console.log(erro)
            );
    }else{
      formService.getMovimentacoesEstoque(cookieService.get("idEstoque"))
            .subscribe(
              movimentacoes =>
                (
                  this.listaMovimentacoes = movimentacoes
                ),
                erro => console.log(erro)
            );
      cookieService.remove("idEstoque");
    }

    

   }

  ngOnInit() {
  }

}
