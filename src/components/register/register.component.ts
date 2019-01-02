import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-input/paper-textarea';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icons';

import view from './register.template.html';
import style from './register.style.scss';
import '../shared-styles';

export class RegisterPage extends PolymerElement {
  $: any;

  static get is() {
    return 'register-page';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  submit(){
    this.set('route.path', '/login');
   
}
}
window.customElements.define(RegisterPage.is, RegisterPage);
