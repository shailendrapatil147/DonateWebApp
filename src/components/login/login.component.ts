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
import {store} from "../../redux/stores/store";
import * as actions from'../../redux/actions';
import { userQueryApolloClient } from'../../services/user-query-apollo-client';
import { loginUser } from '../../models/graphql/user';
import {User} from'../../models/graphql/user';
import {LoginErrors, WebApiErrors} from'../../common/error-massages';

export class LoginPage extends PolymerElement {
  $: any;
  constructor(){
    super();
  }
  
  ready(){
    super.ready();
    store.subscribe(() => this._subscribe());
  }

  _subscribe(): void {
    //console.log(store.getState());
    var state = store.getState();

    if(state.loginreducer.user){
        if(state.loginreducer.user instanceof User){
          this.set('route.path', '/view1');
        }      
    }      
  }

  static get is() {
    return 'login-page';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  static get properties() {
    return {
        user:{
          type: User,
          value: {
              email: "",
              password: ""
          }
      }
    }
  }

  login(){
    //store.dispatch({type: ActionTypes.USER_LOGIN, data: {user :{ username :'username', password :'password'}} as any});
    var client = userQueryApolloClient.query({
      query: loginUser,
      variables:{
        email: this.user.email,
        password: this.user.password,
      }
    }).then((data: any) => {if(data.data.user ){
                              this.set('route.path', '/view1');
                              store.dispatch(actions.userlogin(data.data.user));                              
                            }
                            else{
                              store.dispatch(actions.error(LoginErrors.INVALIDUSERNAME));
                          }})
      .catch((error: any) => store.dispatch(actions.error(WebApiErrors.INTERNALSERVERERROR)));

      console.log(client);
  }

  register() {  
      this.set('route.path', '/register');
    }
}
window.customElements.define(LoginPage.is, LoginPage);
