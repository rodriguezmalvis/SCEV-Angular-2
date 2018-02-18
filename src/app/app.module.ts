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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaMovimentacoesComponent } from './lista-movimentacoes/lista-movimentacoes.component';
import { CadastroMovimentacaoComponent } from './cadastro-movimentacao/cadastro-movimentacao.component';
import { FormService } from './shared/services/formService';
import { CadastroTransferenciaComponent } from './cadastro-transferencia/cadastro-transferencia.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ListaProdutosEstoqueComponent } from './lista-produtos-estoque/lista-produtos-estoque.component';
import { FormGroupBuilder } from './shared/services/formGroupBuilder';


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
    CadastroMovimentacaoComponent,
    CadastroTransferenciaComponent,
    ListaProdutosEstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormService, CookieService, FormGroupBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
