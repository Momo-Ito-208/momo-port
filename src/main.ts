import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBaby, faChildren, faCow, faFaceGrinStars, faPalette, fas, faSquareBinary, faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { fab, faJava } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faJava,
  fab,
  fas,
  faBaby,
  faFaceGrinStars,
  faCow,
  faChildren,
  faPalette,
  faSquareBinary
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')