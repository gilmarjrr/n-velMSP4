import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Aplicação Angular';

  constructor(private router: Router) {}

  onNovoClick() {
    console.log("Botão 'Novo' clicado!");  
    this.router.navigate(['/dados']);  
  }

  onCatalogoClick() {
    console.log("Botão 'Catálogo' clicado!");  
    this.router.navigate(['/lista']);  
  }
}
