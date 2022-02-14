import * as main from './modules/mainprog.js';
main.addBtn;
main.bkAuthor;
main.bkTitle;
main.bklist;
main.time;

import { default as Library } from './modules/mainprog.js';

import { myLib } from './modules/newInstance.js';

import * as spa from './modules/spa.js';
spa.contactBtn;
spa.listBtn;
spa.section1;
spa.section2;
spa.section3;
spa.addNewBtn;
spa.contactShow();
spa.listShow();
spa.addNewShow();

import { DateTime } from './node_modules/luxon/src/luxon.js';

import * as yourcurrentTime from './modules/datetime.js';
main.time.textContent = '';
setInterval(() => { main.time.textContent = `${yourcurrentTime.currentTime}`; }, 1000);