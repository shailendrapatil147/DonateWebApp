import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/iron-selector/iron-selector';

import view from './donate-drawer.html';
import style from './donate-drawer.style.scss';

export class DonateDrawer extends PolymerElement {
  $: any;

  constructor(){
    super();
  }
  
  static get is() {
    return 'donate-drawer';
  }

  static get template() {
    return html([`<style>${style}</style>${view}`]);
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true
      },
      routeData: Object,
      subroute: Object,
      rootPath: String,
      hide:{
        type: Boolean,
        value: false
      }
    };
  }
}

//export{DonateDrawer}
//window.customElements.define(DonateDrawer.is, DonateDrawer);