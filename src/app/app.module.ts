import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListaEstoquesComponent } from './lista-estoques/lista-estoques.component';
import { HttpModule } from '@angular/http';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaMovimentacoesComponent } from './lista-movimentacoes/lista-movimentacoes.component';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';
import { FormService } from './shared/services/formService';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BannerComponent,
    ListaEstoquesComponent,
    CadastroEstoqueComponent,
    CadastroProdutoComponent,
    ListaProdutosComponent,
    ListaMovimentacoesComponent,
    CadastroMovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
