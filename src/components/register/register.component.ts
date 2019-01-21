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
import {User} from'../../models/graphql/user';

export class RegisterPage extends PolymerElement {
  $: any;
  
  constructor(){
    super();
    this.user = new User();
    // this.user = {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phoneNumber: "",
    //   role_Id: 1,
    //   address: "",
    //   password: ""}
  }

  ready(){
    super.ready();
  }

  static get is() {
    return 'register-page';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  submit(){
    this.set('route.path', '/login');   
  }

  static get properties() {
    return {
        user: User
        }
  }

  clearInput(){
      this.user.email = "test1";
      this.user.firstName = "test1";
      this.user.lastName = "test1";
  }
}
window.customElements.define(RegisterPage.is, RegisterPage);
