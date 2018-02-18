import { Estoque } from "../cadastro-estoque/estoque";
import { Produto } from "../cadastro-produto/produto";

export class Movimentacao{

    idMovimentacao: Number
    tipo: String
    descricao: String
    quantidade: Number
    estoque: Estoque = new Estoque();
    produto: Produto = new Produto();
    preco: Number

}