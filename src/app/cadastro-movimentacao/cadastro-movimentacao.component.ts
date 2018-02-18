import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/services/formService';
import { Movimentacao } from '../lista-movimentacoes/movimentacao';
import { Estoque } from '../cadastro-estoque/estoque';
import { Produto } from '../cadastro-produto/produto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormGroupBuilder } from '../shared/services/formGroupBuilder';

@Component({
  selector: 'app-cadastro-movimentacao',
  templateUrl: './cadastro-movimentacao.component.html',
  styleUrls: ['./cadastro-movimentacao.component.css']
})
export class CadastroMovimentacaoComponent implements OnInit {

  tipos: Object[] = [];
  listaEstoques: Estoque[] = [];
  listaProdutos: Produto[] = [];
  movimentacao: Movimentacao = new Movimentacao();
  formulario: FormGroup;

  constructor(private formService: FormService, private builder: FormGroupBuilder) { 

    this.formulario = builder.getFormGroupMovimentacao();

    formService.getTiposMovimentacoes()
            .subscribe(
                tipos =>
                (
                  this.tipos = tipos
                ),
                erro => console.log(erro)
            );
    
            formService.getEstoques()
            .subscribe(
                estoques =>
                (
                  this.listaEstoques = estoques
                ),
                erro => console.log(erro)
            );

            this.formService.getProdutos()
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

  cadastra(){
    console.log(this.movimentacao);

          this.formService.cadastraMovimentacao(this.movimentacao)
              .subscribe(() => {
                  this.formulario = this.builder.getFormGroupMovimentacao();
                  console.log('Movimentacao salva com sucesso');
              }, erro =>  console.log(erro));
  }

}
