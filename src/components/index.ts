import {setRootPath, setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings';
import {DonateApp} from './donate/donate.component';

declare var window: any;

setRootPath(window.Polymer.rootPath);
setPassiveTouchGestures(true);

const elements = [
  DonateApp,
  // Add your STATIC elements here
];

for (const el of elements) {
  customElements.define(el.is, el);
}
