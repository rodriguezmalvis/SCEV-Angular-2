import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstoquesComponent } from './lista-estoques/lista-estoques.component';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaMovimentacoesComponent } from './lista-movimentacoes/lista-movimentacoes.component';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';

const routes: Routes = [
  { path: 'listaEstoques', component: ListaEstoquesComponent },
  { path: 'cadastraEstoque', component: CadastroEstoqueComponent },
  { path: 'cadastraProduto', component: CadastroProdutoComponent },
  { path: 'listaProdutos', component: ListaProdutosComponent },
  { path: 'listaMovimentacoes', component: ListaMovimentacoesComponent },
  { path: 'cadastraMovimentacao', component: CadastroMovimentacaoComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}