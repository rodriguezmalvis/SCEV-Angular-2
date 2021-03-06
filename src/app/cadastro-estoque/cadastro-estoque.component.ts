import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque';
import { Http, Headers } from '@angular/http';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormGroupBuilder } from '../shared/services/formGroupBuilder';
import { FormGroup } from '@angular/forms';
import { Builder } from 'protractor';
import { Alerta } from '../alert/alerta';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: Estoque = new Estoque();
  tipos: Object[]=[];
  formulario: FormGroup;
  alerta: Alerta = new Alerta();

  constructor(private formService: FormService, 
              cookieService: CookieService, 
              private builder: FormGroupBuilder) { 

    this.formulario = builder.getFormGroupEstoque();

    if(cookieService.get("idEstoque") !== undefined){
      formService.getEstoque(cookieService.get("idEstoque"))
      .subscribe(
        estoque => (
          this.formulario.setValue(estoque)
        ),
        erro => (
          console.log(erro)
        )
      );
      cookieService.remove("idEstoque");
    }

    this.formService.getTiposEstoque()
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

  cadastra(){
        this.formService.cadastraEstoque(this.estoque)
            .subscribe(resposta => {
                (resposta.tipo === "success") 
                ? (
                  this.formulario = this.builder.getFormGroupEstoque(),
                  this.estoque = new Estoque()
                ) : false
                this.alerta.novaAlerta(resposta.header,resposta.tipo,resposta.messages);
            }, erro =>  console.log(erro));
  }

}
