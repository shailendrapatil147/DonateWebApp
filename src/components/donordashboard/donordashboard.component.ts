import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/paper-icon-button';

import view from './donordashboard.template.html';
import style from './donordashboard.style.scss';
import '../shared-styles';
import '../worklist/worklist.component';
import '../workdetail/workdetail.component';
import '@polymer/iron-icons/iron-icons.js';

export class DonorDashboard extends PolymerElement {
  $: any;

  static get is() {
    return 'donor-dashboard';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  ready()
  {
    super.ready();      
  }

  constructor(){
    super();  
  }
  
  static get properties() {
    return {
        selectedValue : {
            type : String
        },
        options1 : {
            type: Array,
            value: ['fix CSS','website work','backend work']
        }       
            
    };
  }
}

window.customElements.define(DonorDashboard.is, DonorDashboard);