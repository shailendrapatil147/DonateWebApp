import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-input/paper-textarea';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@vaadin/vaadin-date-picker';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';

import '../icons';

import view from './publishwork.template.html';
import style from './publishwork.style.scss';
import '../shared-styles';
import * as actions from'../../redux/actions';
import { Work, addWork } from '../../models/graphql/work';
import { ngoCommandApolloClient } from '../../services/ngo-command-apollo-client';
import { store } from '../../redux/stores/store';
import { LoginErrors, WebApiErrors } from '../../common/error-massages';

export class PublishWork extends PolymerElement {
  $: any;
  work:Work;
  constructor(){
    super();
    this.work = new Work();
    this.work.workTypeId =1;
    this.work.workId = 5;
    this.work.ngoId = 4; 
  }

  ready(){
    super.ready();
  }

  static get is() {
    return 'publish-work';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  publishWork(){
    let client = ngoCommandApolloClient.mutate({
      mutation: addWork,
      variables:{
        addWork: this.work.toJSON()
      },

    }).then((data: any) => {if(data.data.addWork){
                              // store.dispatch(actions.userlogin(data.data.user));
                              this.set('route.path', '/ngodashboard');                           
                            }
                            else{
                              store.dispatch(actions.error(LoginErrors.INVALIDUSERNAME));
                          }})
      .catch((error: any) => store.dispatch(actions.error(WebApiErrors.INTERNALSERVERERROR)));
  }
  
}
window.customElements.define(PublishWork.is, PublishWork);
