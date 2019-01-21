//import {setRootPath, setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings';
import {DonateDrawer} from './donate-drawer/donate-drawer';

declare var window: any;

//setRootPath(window.Polymer.rootPath);
//setPassiveTouchGestures(true);

const elements = [
    DonateDrawer
];

for (const el of elements) {
  customElements.define(el.is, el);
}
