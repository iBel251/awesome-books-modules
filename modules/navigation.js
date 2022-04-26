// Link Interaction
const listBtn = document.querySelector('#listBtn');
const addNewBtn = document.querySelector('#addNewBtn');
const contactBtn = document.querySelector('#contactBtn');

const listSec = document.querySelector('.list');
const addNewSec = document.querySelector('.add-new');
const contactSec = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  listSec.style.display = 'block';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listSec.style.display = 'none';
  addNewSec.style.display = 'block';
  contactSec.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listSec.style.display = 'none';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'flex';
});
