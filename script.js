const splitterForm = document.querySelector('#splitter-form');
const inputAmount = document.querySelector('#input-amount');
const clearList = document.querySelector('#clear-list');
const listGroup = document.querySelector('.list-group')

splitterForm.addEventListener('submit', addAmount);

clearList.addEventListener('click', deleteList)

function addAmount(e) {
  e.preventDefault();

  const li = document.createElement('li');
  let moneyLeft = 0;
  let money100 = 0;
  let money50 = 0;
  let money20 = 0;
  let money10 = 0;
  let money5 = 0;
  let money1 = 0;
  money = inputAmount.value;

  if (money >= 100) {
    moneyLeft = money % 100;
    money100 = money / 100;
  }
  if (moneyLeft >= 50) {
    money50 = moneyLeft / 50
    moneyLeft = moneyLeft % 50;
  }
  if (moneyLeft >= 20) {
    money20 = moneyLeft / 20
    moneyLeft = moneyLeft % 20;
  }
  if (moneyLeft >= 10) {
    money10 = moneyLeft / 10
    moneyLeft = moneyLeft % 10;
  }
  if (moneyLeft >= 5) {
    money5 = moneyLeft / 5
    moneyLeft = moneyLeft % 5;
  }
  if (moneyLeft >= 1) {
    money1 = moneyLeft / 1
    moneyLeft = moneyLeft % 1;
  }

  li.className = 'todo-item list-group-item mb-1';
  li.appendChild(document.createTextNode(`${Math.floor(money100)} Sheet of $100,
  ${Math.floor(money50)} Sheet of $50,
  ${Math.floor(money20)} Sheet of $20,
  ${Math.floor(money10)} Sheet of $10,
  ${Math.floor(money5)} Sheet of $5,
  ${Math.floor(money1)} Sheet of $1`))

  listGroup.appendChild(li);

  inputAmount.value = ""

}

function deleteList(e) {
  listGroup.innerHTML = "";
}