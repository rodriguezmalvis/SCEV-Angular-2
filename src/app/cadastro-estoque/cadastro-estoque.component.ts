import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque';
import { Http, Headers } from '@angular/http';
import { FormService } from '../shared/services/formService';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: Estoque = new Estoque();
  tipos: Object[]=[];

  constructor(private http: Http, formService: FormService) { 

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

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:8080/cadastraEstoque', JSON.stringify(this.estoque), { headers: headers })
            .subscribe(() => {
                this.estoque = new Estoque();
                console.log('Foto salva com sucesso');
            }, erro =>  console.log(erro));
  }

}
