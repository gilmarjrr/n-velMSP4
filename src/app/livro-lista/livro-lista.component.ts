import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule],
  providers: [ControleEditoraService, ControleLivrosService]
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras(); 
    this.livros = this.servLivros.obterLivros().slice(0, 2); 
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros().slice(0, 2); 
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
