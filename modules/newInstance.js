import { default as Library } from './mainprog.js';

import * as mainProgram from './mainprog.js';

export const myLib = new Library();
mainProgram.addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  myLib.addBook(mainProgram.bkTitle.value, mainProgram.bkAuthor.value);
});
document.addEventListener('DOMContentLoaded', () => {
  myLib.getLocalStorage();
});