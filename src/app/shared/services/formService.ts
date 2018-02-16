import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FormService{

    constructor(private http: Http){

    }

    getTiposEstoque(){

        return this.http.get('http://localhost:8080/estoque/tipos.json')
            .map(res => res.json());

    }

    getTiposProduto(){

        return this.http.get('http://localhost:8080/produto/tipos.json')
            .map(res => res.json());

    }

    getTiposMovimentacoes(){

        return this.http.get('http://localhost:8080/movimentacao/tipos.json')
            .map(res => res.json());

    }

}