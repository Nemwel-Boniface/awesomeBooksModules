const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const listBtn = document.getElementById('list');
const addNewBtn = document.getElementById('addNew');
const contactBtn = document.getElementById('contact');

export const listShow = () => {
  section1.classList.remove('dis-none');
  section2.classList.add('dis-none');
  section3.classList.add('dis-none');
  listBtn.classList.add('active-btn');
  addNewBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
};
export const addNewShow = () => {
  section2.classList.remove('dis-none');
  section1.classList.add('dis-none');
  section3.classList.add('dis-none');
  addNewBtn.classList.add('active-btn');
  listBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
};
export const contactShow = () => {
  section3.classList.remove('dis-none');
  section1.classList.add('dis-none');
  section2.classList.add('dis-none');
  contactBtn.classList.add('active-btn');
  addNewBtn.classList.remove('active-btn');
  listBtn.classList.remove('active-btn');
};
contactBtn.addEventListener('click', contactShow);
listBtn.addEventListener('click', listShow);
addNewBtn.addEventListener('click', addNewShow);

export { section1, section2, section3, listBtn, addNewBtn, contactBtn };