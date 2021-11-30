import { Transferencia } from '../../models/transferencia.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';

@Component({
    selector: 'app-novo-membro',
    templateUrl: './novo-membro.component.html',
    styleUrls: ['./novo-membro.component.scss']
})

export class NovoMembroComponent {

  @Output() aoCadastrar = new EventEmitter<any>();
  @Output() campoComErro = new EventEmitter<string>();

  name: string;
  birthday: string;
  address: string;
  mail: string;

  constructor(private service: CadastroService) {}

  transferir() {
    console.log('Cadastrando novo Membro');
    if (this.validarCampos()) {
      const valorEmitir: Transferencia = {name: this.name, birthday: this.birthday, address: this.address, mail: this.mail};

      this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
       console.log(resultado);
       this.limparCampos();
      },
      error => console.error(error));
    }
  }

  limparCampos() {
    this.name = null;
    this.birthday = null;
    this.address = null;
    this.mail = null;
  }

  validarCampos() {
    const valido = this.name !== null && this.address !== null && this.address != null && this.mail != null;
    if (!valido) {
      this.limparCampos();
      return this.campoComErro.emit('Insira um valor válido');
  }
    return valido;
  }
}
