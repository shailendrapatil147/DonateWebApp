import {PolymerElement, html} from '@polymer/polymer/polymer-element';

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
}
window.customElements.define(LoginPage.is, LoginPage);
