import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Meu perfil', url: 'folder/perfil',icon:'person'},
    {title: 'Sobre o pl', url: 'folder/sobre',icon:'information'},
    {title: 'Termos e Condições', url: 'folder/termos', icon:'reader'},
    {title: 'Sair', url: 'folder/termos', icon:'arrow-back'}

  ];
  constructor() {}
}
