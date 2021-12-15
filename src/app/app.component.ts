import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'perfil', url: 'folder/perfil',icon:'person'},
    {title: 'sobre', url: 'folder/sobre',icon:'information'},
    {title: 'termos', url: 'folder/termos', icon:'reader'},
    {title: 'sair', url: 'folder/sair', icon:'arrow-back'}

  ];
  constructor() {}
}
