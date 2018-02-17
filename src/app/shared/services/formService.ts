import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Estoque } from "../../cadastro-estoque/estoque";
import { Produto } from "../../cadastro-produto/produto";
import { Movimentacao } from "../../lista-movimentacoes/movimentacao";
import { Transferencia } from "../../cadastro-transferencia/transferencia";

@Injectable()
export class FormService{

    constructor(private http: Http){

    }

    getTiposEstoque(){

        return this.http.get('http://localhost:8080/estoque/tipos.json')
            .map(res => res.json());

    }

    cadastraEstoque(estoque: Estoque){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:8080/cadastraEstoque',
        JSON.stringify(estoque), { headers: headers });
    }

    getTiposProduto(){

        return this.http.get('http://localhost:8080/produto/tipos.json')
            .map(res => res.json());

    }

    cadastraProduto(produto: Produto){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post('http://localhost:8080/cadastraProduto',
        JSON.stringify(produto), { headers: headers });

    }

    getTiposMovimentacoes(){

        return this.http.get('http://localhost:8080/movimentacao/tipos.json')
            .map(res => res.json());

    }

    getEstoques(){

        return this.http.get('http://localhost:8080/movimentacao/estoques.json')
            .map(res => res.json());

    }

    getOutrosEstoques(idEstoque){

        return this.http.get('http://localhost:8080/transferencia/outrosEstoques/'+idEstoque+'.json')
            .map(res => res.json());

    }

    getProdutosEstoque(idEstoque: Number){

        return this.http.get('http://localhost:8080/movimentacao/produtos/'+idEstoque+'.json')
            .map(res => res.json());

    }

    getProdutos(){

        return this.http.get('http://localhost:8080/movimentacao/produtos.json')
            .map(res => res.json());

    }


    cadastraMovimentacao(movimentacao: Movimentacao){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post('http://localhost:8080/cadastraMovimentacao',
        JSON.stringify(movimentacao), { headers: headers });
    }

    cadastraTransferencia(transferencia: Transferencia){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        return this.http.post('http://localhost:8080/cadastraTransferencia',
        JSON.stringify(transferencia), { headers: headers });
    }

}