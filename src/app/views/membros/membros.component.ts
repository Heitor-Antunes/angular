import { CadastroService } from '../../services/cadastro.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../../models/transferencia.model';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {
    transferencias: any[];
    @Input() campoComErro: any;

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
