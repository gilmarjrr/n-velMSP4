import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  providers: [ControleEditoraService, ControleLivrosService]
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = ''; 
  public editoras: Array<Editora> = []; 

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Componente LivroDados carregado');
    this.editoras = this.servEditora.getEditoras(); 
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n'); 
    this.servLivros.incluir(this.livro); 
    this.router.navigate(['/lista'])
  };
}
