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
import { store } from '../../redux/stores/store';

export class SubscribedUser extends PolymerElement {
  $: any;
  workId: number;
  isUsers: boolean;

 workRequest: workrequest;
  static get is() {
    return 'subscribed-user';
  }
  
  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }   

   ready(){
   super.ready();
   store.subscribe(() => this._subscribe()); 
   this._subscribe();   
   //const datePicker = document.querySelector("vaadin-date-picker");
   //datePicker.addEventListener("value-changed",  console.log(datePicker));
  
  }
  
  getDetails() {           
    this.set('route.path', '/workdetail');
    this.set('this.route.queryParams', 'sheetal');
  }

  constructor(){
    super(); 
    this.workRequest = new workrequest();
    this.isUsers = false;    
  }

  worklist(){      
  }

  _subscribe(): void{
    const state = store.getState();
    if(state.workdetailreducer && state.workdetailreducer.workId ) {
      this.workId = state.workdetailreducer.workId ;
      if(this.workId > 0){
        var client = donarQueryApolloClient.watchQuery<any>({
          query:GetAllWorkRequests,
          variables:{workId:this.workId}
        }).subscribe({
          next: ({data, loading}) => {
            if(data.getAllWorkRequests.length > 0){
              this.isUsers = true        
              this.$.vaadingrid.items = data.getAllWorkRequests; 
            }
            else{
              this.isUsers = false;
            }
                      
          }
        });    
      }     
    }      
  }
}

window.customElements.define(SubscribedUser.is, SubscribedUser);
