import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO)  Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos  profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      autores: ['Paul Ditel', 'Harvey Deitel'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro 3',
      resumo: 'Resumo do Livro 3',
      autores: ['Autor 5'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
