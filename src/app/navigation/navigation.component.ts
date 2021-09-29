import { Component } from "@angular/core";

@Component({
  selector: "app-navigation",
  template: `
    <mat-tab-group mat-align-tabs="center">
      <mat-tab label="Cadastrar Livros"
      ><app-register-new-book></app-register-new-book
      ></mat-tab>
      <mat-tab label="Listar Livros"
      ><app-list-books></app-list-books
      ></mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      .mat-tab-group {
        margin-bottom: 48px;
      }
    `,
  ],
})
export class NavigationComponent {
  constructor() {}
}
