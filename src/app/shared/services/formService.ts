import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Estoque } from "../../cadastro-estoque/estoque";
import { Produto } from "../../cadastro-produto/produto";
import { Movimentacao } from "../../lista-movimentacoes/movimentacao";
import { Transferencia } from "../../cadastro-transferencia/transferencia";
import { environment } from "../../../environments/environment";

@Injectable()
export class FormService{

    constructor(private http: Http){

    }

    getTiposEstoque(){
        return this.http.get(environment.serverUrl+'estoque/tipos.json')
            .map(res => res.json());
    }

    cadastraEstoque(estoque: Estoque){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(environment.serverUrl+'cadastraEstoque',
        JSON.stringify(estoque), { headers: headers })
        .map(res => res.json());
    }

    getTiposProduto(){
        return this.http.get(environment.serverUrl+'produto/tipos.json')
            .map(res => res.json());
    }

    cadastraProduto(produto: Produto){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post(environment.serverUrl+'cadastraProduto',
        JSON.stringify(produto), { headers: headers })
        .map(res => res.json());
    }

    getTiposMovimentacoes(){
        return this.http.get(environment.serverUrl+'movimentacao/tipos.json')
            .map(res => res.json());
    }

    getTiposTransferencia(){
        return this.http.get(environment.serverUrl+'transferencia/tipos.json')
            .map(res => res.json());
    }

    getEstoques(){
        return this.http.get(environment.serverUrl+'estoque/lista.json')
            .map(res => res.json());
    }

    getOutrosEstoques(idEstoque){
        return this.http.get(environment.serverUrl+'transferencia/outrosEstoques/'+idEstoque+'.json')
            .map(res => res.json());
    }

    getProdutosEstoque(idEstoque){
        return this.http.get(environment.serverUrl+'estoque/produtos/'+idEstoque+'.json')
            .map(res => res.json());
    }

    getProdutos(){
        return this.http.get(environment.serverUrl+'produto/lista.json')
            .map(res => res.json());
    }

    getProduto(idProduto){
        return this.http.get(environment.serverUrl+'produto/'+idProduto+'.json')
            .map(res => res.json());
    }

    cadastraMovimentacao(movimentacao: Movimentacao){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post(environment.serverUrl+'cadastraMovimentacao',
        JSON.stringify(movimentacao), { headers: headers })
        .map(res => res.json());
    }

    cadastraTransferencia(transferencia: Transferencia){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post(environment.serverUrl+'cadastraTransferencia',
        JSON.stringify(transferencia), { headers: headers })
        .map(res => res.json());
    }

    getMovimentacoes(){
        return this.http.get(environment.serverUrl+'movimentacao/lista.json')
            .map(res => res.json())
    }

    getMovimentacoesEstoque(idEstoque){
        return this.http.get(environment.serverUrl+'estoque/movimentacoes/'+idEstoque+'.json')
            .map(res => res.json())
    }

    getEstoque(idEstoque){
        return this.http.get(environment.serverUrl+'estoque/'+idEstoque+'.json')
            .map(res => res.json())
    }

}