import {Component,ViewEncapsulation} from '@angular/core';

@Component({
  selector : 'home',
  template : `<p>Home Component</p>`,
  //encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss').toString()]
})

export class Home{

}
