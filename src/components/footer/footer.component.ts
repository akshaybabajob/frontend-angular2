import {Component} from '@angular/core';

@Component({
  selector : 'bj-footer',
  template : `
  <footer class="Wrapper">
    <div class="fcolor">© 2007-2016 Babajob Services Pvt. Ltd. All Rights Reserved.</div>
  </footer>
  `,
  styles : [require('./footer.scss').toString()]
})

export class FooterComponent{

}
