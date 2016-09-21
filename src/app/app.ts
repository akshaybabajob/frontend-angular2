import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <bj-header></bj-header>
  <router-outlet></router-outlet>
  <bj-footer></bj-footer>
  `
})
export class App {

}
