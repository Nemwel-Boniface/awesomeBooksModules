import * as main from './modules/mainprog.js';

import myLib from './modules/newInstance.js'; //eslint-disable-line
import * as spa from './modules/spa.js'; //eslint-disable-line

import * as yourcurrentTime from './modules/datetime.js';

main.time.textContent = '';
setInterval(() => { main.time.textContent = `${yourcurrentTime.currentTime}`; }, 1000);