import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Produto } from './produto';
import { Http, Headers } from '@angular/http';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormGroup } from '@angular/forms';
import { FormGroupBuilder } from '../shared/services/formGroupBuilder';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit, AfterViewChecked {

  produto: Produto = new Produto();
  tipos: Object[] = [];
  formulario: FormGroup;

  constructor(private formService: FormService, cookieService: CookieService,private builder: FormGroupBuilder) {

    this.formulario = this.builder.getFormGroupProduto();

    if(cookieService.get("idProduto") !== undefined){
        formService.getProduto(cookieService.get("idProduto"))
        .subscribe(
            resposta => (
                this.formulario.setValue(resposta)
            ),
            erro => (
                console.log(erro)
            )
        );
        cookieService.remove("idProduto");
    }

    formService.getTiposProduto()
            .subscribe(
                tipos =>
                (
                  this.tipos = tipos
                ),
                erro => console.log(erro)
            );

   }

    ngOnInit() {
    }

    ngAfterViewChecked(): void {
    }

  cadastra(){
      console.log(this.produto);

          this.formService.cadastraProduto(this.produto)
              .subscribe(() => {
                  this.formulario = this.builder.getFormGroupProduto()
                  console.log('Produto salvo com sucesso');
              }, erro =>  console.log(erro));
    }
}
