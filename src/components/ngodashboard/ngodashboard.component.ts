import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/paper-icon-button';
import '@polymer/paper-button/paper-button';


import ngodashboard from './ngodashboard.template.html';
import style from './ngodashboard.style.scss';
import '../shared-styles';
import '../worklist/worklist.component';
import '@polymer/iron-icons/iron-icons.js';

export class NgoDashboard extends PolymerElement {
  $: any;

  static get is() {
    return 'ngo-dashboard';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${ngodashboard}`]);
  }

  ready()
  {
    super.ready();      
  }

  PublishWork() {
    //window.open('https://stackoverflow.com?index=index', '_blank');
    this.set('route.path', '/publishwork');
  }

  constructor(){
    super();  
   
  //  const grid = document.querySelector('vaadin-grid');
   // fetch('https://demo.vaadin.com/demo-data/1.0/people?count=10')
     // .then(res => res.json())
     // .then(json => this.$.vaadingrid.items = json.result);   
       
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

window.customElements.define(NgoDashboard.is, NgoDashboard);