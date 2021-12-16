'use strict';

let views = [
  {
    id: 8,
    price: 8,
    view: '10K',
  },
  {
    id: 12,
    price: 12,
    view: '50K',
  },
  {
    id: 16,
    price: 16,
    view: '100K',
  },
  {
    id: 20,
    price: 20,
    view: '500K',
  },
  {
    id: 24,
    price: 24,
    view: '1M',
  },
];

let slider = document.querySelector('input[type=range]');
let btn = document.querySelector('input[type=checkbox]');
const pageViews = document.querySelector('.views__page');
const priceAmount = document.querySelector('.price__amount');

let yearlyBilling = false;
let price = views[2].price;

function handleInput(e) {
  let input = parseInt(e.target.value);

  views.forEach((item, index) => {
    price = item.price;
    let totalViews = item.view;
    let bg = index * 25;

    if (price === input) {
      priceAmount.textContent = `$${price}.00`;
      pageViews.textContent = totalViews;
      slider.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) ${bg}%,
       hsl(223, 50%, 87%) ${bg}%)`;
    }
  });
}

function handleClick(btn) {
  yearlyBilling = btn.currentTarget.checked;

  if (yearlyBilling) {
    priceAmount.textContent = `$${price * 0.75}.00`;
  } else priceAmount.textContent = `$${price * 1}.00`;
}

btn.addEventListener('click', handleClick);

slider.addEventListener('input', e => {
  handleInput(e);
});
