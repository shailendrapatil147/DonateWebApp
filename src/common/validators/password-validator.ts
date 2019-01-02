import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {IronValidatorBehavior} from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

export class PasswordValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){

  static get is() {
    return 'password-validator';
  }

  validate(value:any) {
      if (value.length == 3){
          return true;
      }else{
        return false;
      }
  }
}
//window.customElements.define(PasswordValidator.is, PasswordValidator);