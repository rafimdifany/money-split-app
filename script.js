const splitterForm = document.querySelector('#splitter-form');
const inputAmount = document.querySelector('#input-amount');
const splitList = document.querySelector('#split-list');
const clearList = document.querySelector('#clear-list');

splitterForm.addEventListener('submit', addAmount);

function addAmount(e) {
  e.preventDefault();
}