import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { AnimacaoComponent } from "../../animacao/animacao.component";
import { LancamentoComponent } from "../../lancamento/lancamento.component";
import { AvaliacaoComponent } from "../../avaliacao/avaliacao.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, AnimacaoComponent, LancamentoComponent, AvaliacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}