import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: boolean = false;

  constructor(private router: Router) {
  }

  AbrirFecharMenu() {
    this.menu = !this.menu
  }

  sair() {
    this.router.navigateByUrl('/login')
    this.menu = false;
  }

  navegarPerfil() {
    this.router.navigateByUrl('/perfil')
    this.menu = false;
  }

  navegarTreino() {
    this.router.navigateByUrl('/treino')
    this.menu = false;
  }
}
