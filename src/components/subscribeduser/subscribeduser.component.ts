import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import view from './subscribeduser.template.html';
import style from './subscribeduser.style.scss';
import '../shared-styles';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import {} from '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';

import {donarQueryApolloClient} from '../../services/donor-query-apollo-client';
import {workrequest, GetAllWorkRequests} from '../../models/graphql/workrequest';

export class SubscribedUser extends PolymerElement {
  $: any;
 workRequest: workrequest;
  static get is() {
    return 'subscribed-user';
  }
  
  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }   

  ready()
  {
    super.ready();        
  }
  
  getDetails() {           
    this.set('route.path', '/workdetail');
    this.set('this.route.queryParams', 'sheetal');
  }

  constructor(){
    super(); 

    this.workRequest = new workrequest();

    var client = donarQueryApolloClient.watchQuery<any>({
      query:GetAllWorkRequests,
      variables:{workId:1}
    }).subscribe({
      next: ({data, loading}) => {        
        this.$.vaadingrid.items = data.getAllWorkRequests;           
      }
    })
      
  }

  worklist(){   
    
  }
}

window.customElements.define(SubscribedUser.is, SubscribedUser);
