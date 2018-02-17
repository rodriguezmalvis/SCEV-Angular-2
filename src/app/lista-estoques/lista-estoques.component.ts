import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-lista-estoques',
  templateUrl: './lista-estoques.component.html',
  styleUrls: ['./lista-estoques.component.css']
})
export class ListaEstoquesComponent implements OnInit {

  listaEstoques: Object[] = [];

  constructor(http: Http, private cookieService: CookieService) {

    http.get('http://localhost:8080/estoque/lista.json')
            .map(res => res.json())
            .subscribe(
                listaEstoques =>
                (
                  this.listaEstoques = listaEstoques
                ),
                erro => console.log(erro)
            );

   }

  ngOnInit() {
  }

  salvaIdEstoque(idEstoque){
    //this.cookieService.put("idEstoque",idEstoque);
  }

}
