import { Component, OnInit } from '@angular/core';
import { Movimentacao } from './movimentacao';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lista-movimentacoes',
  templateUrl: './lista-movimentacoes.component.html',
  styleUrls: ['./lista-movimentacoes.component.css']
})
export class ListaMovimentacoesComponent implements OnInit {

  listaMovimentacoes: Movimentacao[] = [];

  constructor(http: Http) {

    http.get('http://localhost:8080/movimentacao/lista.json')
            .map(res => res.json())
            .subscribe(
              movimentacoes =>
                (
                  this.listaMovimentacoes = movimentacoes
                ),
                erro => console.log(erro)
            );

   }

  ngOnInit() {
  }

}
