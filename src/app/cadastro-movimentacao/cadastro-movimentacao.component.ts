import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/services/formService';

@Component({
  selector: 'app-cadastro-movimentacao',
  templateUrl: './cadastro-movimentacao.component.html',
  styleUrls: ['./cadastro-movimentacao.component.css']
})
export class CadastroMovimentacaoComponent implements OnInit {

  tipos: Object[] = [];

  constructor(formService: FormService) { 

    formService.getTiposMovimentacoes()
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

}
