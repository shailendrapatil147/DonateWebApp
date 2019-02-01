import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import view from './workdetail.template.html';
import style from './workdetail.style.scss';
import '../shared-styles';
import '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-radio-button/paper-radio-button';
import '@polymer/paper-input/paper-textarea';
import '@polymer/paper-button/paper-button';

import {WorkRequest, workrequest} from '../../models/graphql/workrequest';
import {store} from "../../redux/stores/store";
import {donarQueryApolloClient} from '../../services/donor-query-apollo-client';
import {getWorkById, Work} from '../../models/graphql/work';
import {WorkTypeList}  from '../../models/graphql/worktype';
import * as actions from'../../redux/actions';
import {workType} from '../../models/graphql/worktype';
import { WebApiErrors, LoginErrors } from '../../common/error-massages';

export class WorkDetail extends PolymerElement {
  $: any;
  loading: boolean;
  workRequest: workrequest;
  work: Work;
  workId: number;
  
  static get is() {
    return 'work-detail';
  }
  
  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }   

  _subscribe(): void {
    const state = store.getState();
    if(state.workdetailreducer && state.workdetailreducer.workId ) {
      this.workId = state.workdetailreducer.workId ;
      this.work = new Work();     
      var client = donarQueryApolloClient.watchQuery<any>({query:getWorkById, variables:{workId:this.workId}}).subscribe({
        next: ({data, loading}) => {        
          this.loading = loading;
          this.work = data.getWorkById;     
          //this.$.vaadingrid.items = data.work;           
        }
      })
    }
  }

  ready(){
   super.ready();
   store.subscribe(() => this._subscribe()); 
   this.workRequest = new workrequest();    
   //const datePicker = document.querySelector("vaadin-date-picker");
   //datePicker.addEventListener("value-changed",  console.log(datePicker));
  
  }
  
  constructor(){
    super();
    
    // var worktype = donarQueryApolloClient.watchQuery<any>({query:WorkTypeList}).subscribe({
    //   next: ({data, loading}) => {
    //     console.log(data);  
    //     this.loading = loading;
    //     //this.$.InterestedField.items = data.workType;           
    //   }
    // })       
  }
  submit(){

    var state = store.getState();
    this.addWorkRequest.userId=state.loginreducer.user.id;
    this.addWorkRequest.workId ="1";
    this.addWorkRequest.isAccepted = this.workRequest.isaccepted;    
    this.addWorkRequest.notes =  this.workRequest.notes;
    this.addWorkRequest.availableDate =this.workRequest.availableDate;
  
    this.addWorkRequest.hrsContribution = this.$.hrsContribution.value;
    
    var client = donarQueryApolloClient.mutate<any>({ 
      variables: {addWorkRequest: this.addWorkRequest },
      mutation: WorkRequest
    }).then((data: any) => {if(data.data){
              this.set('route.path', '/worklist');                           
            }
            else{
              store.dispatch(actions.error(LoginErrors.INVALIDUSERNAME));
          }})
        .catch((error: any) => store.dispatch(actions.error(WebApiErrors.INTERNALSERVERERROR)));
        }
   static get properties() {
    return {
        selectedValue : {
            type : String
        },
        userId:
        {
          type: Number,
        },      
        datepicker:{
            type:String,
        },       
        addWorkRequest:{
          type: JSON,          
          value: {
          work_Id: String ,
          user_Id : String,
          isAccepted: Boolean,
          notes:String,
          availableDate: String,
          hrsContribution: String
          }
      },

    };
}
}

window.customElements.define(WorkDetail.is, WorkDetail);
