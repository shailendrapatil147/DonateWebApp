import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-input/paper-textarea';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '../icons';

import view from './register.template.html';
import style from './register.style.scss';
import '../shared-styles';
import {User} from'../../models/graphql/user';
import { userCommandApolloClient } from '../../services/user-command-apollo-client';
import { registerUser } from '../../models/graphql/User';
import { store } from '../../redux/stores/store';
import * as actions from'../../redux/actions';
import { LoginErrors, WebApiErrors } from '../../common/error-massages';

export class RegisterPage extends PolymerElement {
  $: any;
  user: User;
  roletypes: any;

  constructor(){
    super();
    this.user = new User();
    this.roletypes = [{name:"Donor", roleId:1}, {name:"NGO", roleId:2}];
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

  register(){
    let client = userCommandApolloClient.mutate({
      mutation: registerUser,
      variables:{
        user: this.user.toJSON()
      },

    }).then((data: any) => {if(data.data.addAsync){
                              // store.dispatch(actions.userlogin(data.data.user));
                              this.set('route.path', '/login');                           
                            }
                            else{
                              store.dispatch(actions.error(LoginErrors.INVALIDUSERNAME));
                          }})
      .catch((error: any) => store.dispatch(actions.error(WebApiErrors.INTERNALSERVERERROR)));
  }
}
window.customElements.define(RegisterPage.is, RegisterPage);
