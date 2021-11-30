import { CadastroService } from './services/cadastro.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'icc';
  campoComErro: any;

  constructor(private service: CadastroService) {

  }

  transferir($event) {
    this.service.adicionar($event);

    console.log($event);
  }

  exibirModalErro($event) {
    this.campoComErro = $event;

  }

}
