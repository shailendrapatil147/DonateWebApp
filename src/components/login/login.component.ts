import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icons/iron-icons.js';
import '../../common/validators/password-validator';

import view from './login.template.html';
import style from './login.style.scss';
import '../shared-styles';

export class LoginPage extends PolymerElement {
  $: any;

  static get is() {
    return 'login-page';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  register() {
      this.set('route.path', '/register');
    }

    pwdvalidate(value:any){
      if (value.length <3){
        return true;
    }else{
      return false;
    }
    }
  }
window.customElements.define(LoginPage.is, LoginPage);
