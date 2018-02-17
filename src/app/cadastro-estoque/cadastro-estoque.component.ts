import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque';
import { Http, Headers } from '@angular/http';
import { FormService } from '../shared/services/formService';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: Estoque = new Estoque();
  tipos: Object[]=[];

  constructor(private formService: FormService, cookieService: CookieService) { 

    if(cookieService.get("idEstoque") !== undefined){
      console.log("carregando estoque: "+ cookieService.get("idEstoque"))
      formService.getEstoque(cookieService.get("idEstoque"))
      .subscribe(
        estoque => (
          this.estoque = estoque.estoque
        ),
        erro => (
          console.log(erro)
        )
      );
      cookieService.remove("idEstoque");
    }

    formService.getTiposEstoque()
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
    console.log(this.estoque);

        this.formService.cadastraEstoque(this.estoque)
            .subscribe(() => {
                this.estoque = new Estoque();
                console.log('Estoque salvo com sucesso');
            }, erro =>  console.log(erro));
  }

}
