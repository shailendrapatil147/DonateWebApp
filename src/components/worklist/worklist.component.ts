import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import view from './worklist.template.html';
import style from './worklist.style.scss';
import '../shared-styles';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import {} from '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import {donarQueryApolloClient} from '../../services/donor-query-apollo-client';
import {Works,Work} from '../../models/graphql/work';
import {WorkTypeList}  from '../../models/graphql/worktype';
import {workType} from '../../models/graphql/worktype';
import {store} from "../../redux/stores/store";
import * as actions from'../../redux/actions';


export class WorkList extends PolymerElement {
  $: any;
  loading: boolean;
  InterestedFieldoptions:any;
 
  constructor(){
    super();  
    var client = donarQueryApolloClient.watchQuery<any>({query:Works}).subscribe({
      next: ({data, loading}) => {        
        this.loading = loading;
        this.$.vaadingrid.items = data.work;           
      }
    })
    
    var worktype = donarQueryApolloClient.watchQuery<any>({query:WorkTypeList}).subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.interestedfield = data.workType;   
      }
    })          
  }

  ready()
  {
    super.ready();   
    store.subscribe(() => this._subscribe());
  }

  static get is() {
    return 'work-list';
  }
  
  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }   

  getDetails(e: any) {           
    e.currentTarget.dataArg
    store.dispatch(actions.workdetail(e.currentTarget.dataArg)); 
    this.set('route.path', '/workdetail');
  }

  getSubscribedUser(){
    this.set('route.path', '/subscribeduser');  
  }

  _subscribe(): void {
    const state = store.getState();
    if(state.loginreducer.user && state.loginreducer.user.email ) {
      if(state.loginreducer.user.roleId == 1){
        this.isNGO = true;
      }
    }
    else {
        this.isNGO = false;
    }
  }
  static get properties() {
    return {
        selectedValue : {
            type : String
        },       
        workType:{
          type: workType,
        },
        work:{
          type: Work,
        },
        show: {
          type: Boolean,
          value: false
        },
        isNGO:{
          type: Boolean,
          value: false,
          notify: true
        },
    };
}
}

window.customElements.define(WorkList.is, WorkList);
