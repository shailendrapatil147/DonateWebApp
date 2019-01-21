import {PasswordValidator} from './validators/password-validator';
import {setRootPath, setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings';
import './error-massages';
declare var window: any;

setRootPath(window.Polymer.rootPath);
setPassiveTouchGestures(true);

const elements = [
  PasswordValidator
];

for (const el of elements) {
  customElements.define(el.is, el);
}