import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-iconset-svg/iron-iconset-svg';

import defaultscss from './default.scss';
import colorsscss from './colors.scss';
import fontscss from './font.scss';
import paperelementsscss from './paper-elements.scss';
import position from './position.css';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML =
  // TODO: discover why using a template string here breaks everything
  '<dom-module id="shared-styles"><template><style>' +
    defaultscss +
    colorsscss +
    fontscss +
    paperelementsscss+
    position+
  '</style></template></dom-module>';
document.head.appendChild(documentContainer);
