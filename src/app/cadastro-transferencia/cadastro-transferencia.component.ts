import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/services/formService';
import { Estoque } from '../cadastro-estoque/estoque';
import { Transferencia } from './transferencia';
import { ProdutoEstoque } from '../cadastro-movimentacao/produto-estoque';
import { FormGroup } from '@angular/forms';
import { FormGroupBuilder } from '../shared/services/formGroupBuilder';
import { Alerta } from '../alert/alerta';

@Component({
  selector: 'app-cadastro-transferencia',
  templateUrl: './cadastro-transferencia.component.html',
  styleUrls: ['./cadastro-transferencia.component.css']
})
export class CadastroTransferenciaComponent implements OnInit {

  listaEstoques: Estoque[] = [];
  transferencia: Transferencia = new Transferencia();
  listaProdutos: ProdutoEstoque[] = [];
  destinos: Estoque[] = [];
  formulario: FormGroup;
  alerta :Alerta = new Alerta();
  tipos;

  constructor(private formService: FormService, private builder: FormGroupBuilder) {

    this.formulario = builder.getFormGroupTranferencia();

    formService.getEstoques()
      .subscribe(
        estoques =>(
          this.listaEstoques = estoques
        ),
        erro => (
          console.log(erro)
        )
      );

      formService.getTiposTransferencia()
      .subscribe(
        tipos =>(
          this.tipos = tipos.tipoMovimentacoes
        ),
        erro => (
          console.log(erro)
        )
      );

  }

  ngOnInit() {
  }

  carregaSelects(){
    //produtos
    this.formService.getProdutosEstoque(this.transferencia.origem.idEstoque)
      .subscribe(
        produtos => (
          this.listaProdutos = produtos
        ),
        erro => (
          console.log(erro)
        )
      );
    //estoques destino
    this.formService.getOutrosEstoques(this.transferencia.origem.idEstoque)
      .subscribe(
        produtos => (
          this.destinos = produtos
        ),
        erro => (
          console.log(erro)
        )
      );
  }

  cadastra(){
    this.formService.cadastraTransferencia(this.transferencia)
    .subscribe(resposta => {
      (resposta.tipo === "success") ?
      (this.transferencia = new Transferencia(),
      this.formulario = this.builder.getFormGroupTranferencia())
      : false
      this.alerta.novaAlerta(resposta.header,resposta.tipo,resposta.messages);
    }, erro =>  console.log(erro));

  }

}
