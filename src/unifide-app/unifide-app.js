//Import Polymer
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
export const html = (strings, ...values) => strings[0] + values.map((v, i) => v + strings[i+1]).join('');
//Import HTML
import * as view from './unifide-app.template.html';

//Import Dependencies
//polymer app elements
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';

//polymer iron elements
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/av-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-pages/iron-pages.js';

//polymer paper-elements
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

//unifide elements
import './unifide-icons.js';

//unifide ui elements
import 'gridstack/dist/gridstack.js';



class UnifideApp extends PolymerElement {

  static get properties() {
      return {
        appName: {
          type: String,
          value: 'Unifide'
        },
        appRoute: {
          type: String,
        },
        isAnonymous: {
          type: Boolean,
        }

      }
  }
  constructor() {
    super();

  }

  static get template () {
    return view;

  }

}


customElements.define('unifide-app', UnifideApp);
