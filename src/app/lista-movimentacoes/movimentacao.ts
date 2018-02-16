import { Estoque } from "../cadastro-estoque/estoque";
import { Produto } from "../cadastro-produto/produto";

export class Movimentacao{

    idMovimentacao: Number
    tipo: String
    descricao: String
    quantidade: Number
    estoque: Estoque
    produto: Produto

}