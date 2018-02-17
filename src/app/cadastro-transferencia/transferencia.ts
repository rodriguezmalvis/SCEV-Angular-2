import { Estoque } from "../cadastro-estoque/estoque";
import { Produto } from "../cadastro-produto/produto";

export class Transferencia{

    quantidade: Number;
    tipo: String = "Saida";
    origem: Estoque = new Estoque();
    destino: Estoque = new Estoque();
    produto: Produto = new Produto();
    descricao: String

}