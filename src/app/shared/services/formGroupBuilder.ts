import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class FormGroupBuilder{

    constructor(private builder: FormBuilder){

    }

    getFormGroupTranferencia(){
        
    }

    getFormGroupMovimentacao(){
        return this.builder.group({
            movimentacao: this.builder.group({
                idMovimentacao: [''],
                tipo: ['',Validators.required],
                descricao: ['',Validators.required],
                quantidade: ['',Validators.required],
                estoque: this.builder.group({
                    idEstoque: ['',Validators.required]
                }),
                produto: this.builder.group({
                    idProduto: ['',Validators.required]
                }),
            })
        });
    }

    getFormGroupProduto(){
        return this.builder.group({
            produto: this.builder.group({
                idProduto: [''],
                tipo: ['',Validators.required],
                titulo:['',Validators.required] ,
                autor: ['',Validators.required],
                paginas: ['',Validators.required],
                formato: ['',Validators.required],
                isbn: ['',Validators.required],
                preco: ['',Validators.required],
                contato: ['',Validators.required],
                sinopse: ['',Validators.required],
                urlFoto: ['']
            })
        });
    }

    getFormGroupEstoque(){
        return this.builder.group({
            estoque: this.builder.group({
                idEstoque: [''],
                nome: ['',Validators.required],
                descricao: ['',Validators.required],
                tipo: ['',Validators.required],
                produtosEstoque: [''],
                quantidadeProdutos: [''],
            })
        });
    }

    atualizaFormGroup(modelo,formulario){
        let nomes = Object.getOwnPropertyNames(modelo);
        nomes.forEach(nome => {
            console.log(nome);   
            if(formulario.controls[nome.toString()] !== undefined){
                formulario.controls[nome.toString()].setValue(nome.toString());
            }
        });
    }

}