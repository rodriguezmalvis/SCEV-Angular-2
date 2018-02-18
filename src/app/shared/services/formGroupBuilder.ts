import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class FormGroupBuilder{

    constructor(private builder: FormBuilder){

    }

    getFormGroupTranferencia(){
        
    }

    getFormGroupMovimentacao(){
        
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
                urlFoto: ['',Validators.required]
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