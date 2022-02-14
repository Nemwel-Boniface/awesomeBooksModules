import { Library } from './mainprog.js';

import * as mainProgram from './mainprog.js';

const myLib = new Library();
mainProgram.addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  myLib.addBook(mainProgram.bkTitle.value, mainProgram.bkAuthor.value);
});
document.addEventListener('DOMContentLoaded', () => {
  myLib.getLocalStorage();
});

export default myLib;