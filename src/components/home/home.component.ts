import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-image/iron-image.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@fabricelements/skeleton-carousel/skeleton-carousel.js';
import ImgdonarUrl from '../../images/donate-image.png';
import ImgdetailsUrl from '../../Images/donate-details.png';
import view from './home.template.html';
import style from './home.style.scss';

export class HomePage extends PolymerElement {
  $: any;
  constructor(){
    super();
  }

  static get is() {
    return 'home-page';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }

  static get properties() {
    return {
      images: {
        type: Array,
        value: [ImgdonarUrl , ImgdetailsUrl],
      },
    };
  }
}
window.customElements.define(HomePage.is, HomePage);
