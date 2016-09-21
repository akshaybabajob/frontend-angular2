import {Component} from '@angular/core';

@Component({
  selector : 'bj-header',
  template : `
  <header class="Wrapper">
      <div class="Container">
        <div class>
        </div>

        <p class="Header-MenuIcon">
          <img src=require('../public/logo.png') alt="" />
        </p>

        <a href="#" class="Header-Logo">
          <img src='/assets/logo.png' alt="" />
        </a>

        <ul class="Header-Links">
            <a href="#">Search Job</a>
            <a href="#">Search Candidates</a>
            <a to="plans">Plans</a>
        </ul>

        <div class="HeaderLoginBlock">
          <a href="#"
             class="signInBtn">
            For Seekers
          </a>
          <a
             href="#"
             class="signInBtn">
            <b class="lthire">lOOKING FOR A JOB?</b>
          </a>
          <a href="#" class="signInBtn">
              <span class="sign-in">Login</span>
          </a>
          <div class="HeaderLogoutShow mobileMenuHide"></div>

        </div>
      </div>
    </header>
  `,
  styles: [require('./header.scss').toString()]
})

export class HeaderComponent{

}
