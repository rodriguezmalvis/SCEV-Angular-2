import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/services/formService';
import { Movimentacao } from '../lista-movimentacoes/movimentacao';
import { Estoque } from '../cadastro-estoque/estoque';
import { Produto } from '../cadastro-produto/produto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormGroupBuilder } from '../shared/services/formGroupBuilder';
import { MaskService } from '../shared/services/maskService';

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
  precoMask;

  constructor(private formService: FormService, 
              private builder: FormGroupBuilder,
              private maskService: MaskService) { 

    this.formulario = builder.getFormGroupMovimentacao();
    this.precoMask = maskService.getMaskPreco();

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
          this.formService.cadastraMovimentacao(this.movimentacao)
              .subscribe(() => {
                  this.formulario = this.builder.getFormGroupMovimentacao();
              }, erro =>  console.log(erro));
  }

  checaPreco(){
    (this.movimentacao.tipo === "Venda") 
    ? this.formulario.controls["movimentacao"].get("preco").enable()
    : this.formulario.controls["movimentacao"].get("preco").disable()
    }
}
