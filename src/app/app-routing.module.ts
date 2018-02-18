import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstoquesComponent } from './lista-estoques/lista-estoques.component';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaMovimentacoesComponent } from './lista-movimentacoes/lista-movimentacoes.component';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';
import { CadastroTransferenciaComponent } from './cadastro-transferencia/cadastro-transferencia.component';
import { ListaProdutosEstoqueComponent } from './lista-produtos-estoque/lista-produtos-estoque.component';

const routes: Routes = [
  { path: '', component: ListaEstoquesComponent },
  { path: 'listaEstoques', component: ListaEstoquesComponent },
  { path: 'cadastraEstoque', component: CadastroEstoqueComponent },
  { path: 'cadastraProduto', component: CadastroProdutoComponent },
  { path: 'listaProdutos', component: ListaProdutosComponent },
  { path: 'listaMovimentacoes', component: ListaMovimentacoesComponent },
  { path: 'cadastraMovimentacao', component: CadastroMovimentacaoComponent },
  { path: 'cadastraTransferencia', component: CadastroTransferenciaComponent },
  { path: 'listaMovimentacoesEstoque', component: ListaMovimentacoesComponent },
  { path: 'listaProdutosEstoque', component: ListaProdutosEstoqueComponent },
  { path: 'editaEstoque', component: CadastroEstoqueComponent },
  { path: 'editaProduto', component: CadastroProdutoComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}