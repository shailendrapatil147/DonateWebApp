import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-toast';

import view from './donate.template.html';
import style from './donate.style.scss';
import '../icons';
// Have to include the shared styles here even if they're not directly used
// so that they're bundled within the app.js and not within each dynamic view
import '../shared-styles';
import {store} from "../../redux/stores/store";
import * as actions from'../../redux/actions';
import { User } from '../../models/graphql/user';

export class DonateApp extends PolymerElement {
  $: any;
  page: any;

  static get is() {
    return 'donate-app';
  }

  static get template() {
    return html([`<style>${style}</style>${view}`]);
  }

  ready(){
    super.ready();    
    store.subscribe(() => this._subscribe());
  }

  _subscribe(): void {
    const state = store.getState();
    if(state.loginreducer.user && state.loginreducer.user.email ) {
      this.loggedin = true;
      this.user = state.loginreducer.user;
      if(state.loginreducer.user.roleId == 1){
        this.isNGO = true;
      }
    }
    else {
        this.isNGO = false;
        this.loggedin = false;
    }

    if(state.errorreducer.error && state.errorreducer.error.length > 0){
      this.error = state.errorreducer.error;
      this.toggleError();
      store.dispatch(actions.error(""));
    }
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: Object,
      // This shouldn't be necessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
      loggedin:{
        type: Boolean,
        value: false,
        notify: true
      },
      user:{
        type: User
      },
      error: String,
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

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page: string) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'home' in that case.
    this.page = page || 'home';

    // Close a non-persistent drawer when the page & route are changed.
    // if (!this.$.drawer.persistent) {
    //   this.$.drawer.close();
    // }
    // const [route, subroute] = page.replace(this.rootPath, '').split('/');
    // if (subroute != '') {
    //   this.page = 'home';
    // }
  }

  _pageChanged(page: string) {
    // Load page import on demand. Show 404 page if fails
    
      import(
        /* webpackMode: "lazy" */
        `../${page}/${page}.component`
        ).catch(this._showPage404.bind(this));
  }

  _showPage404() {
    this.page = 'view404';
  }

  logout(){
    store.dispatch(actions.userlogout());
    this.set('route.path', '/login');
  }

  toggleError(){
    this.show = !this.show;
  }
}
