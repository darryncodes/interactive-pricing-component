'use strict';

let views = [
  {
    id: 8,
    price: 8,
    discount: 72,
    view: '10K',
  },
  {
    id: 12,
    price: 12,
    discount: 108,
    view: '50K',
  },
  {
    id: 16,
    price: 16,
    discount: 144,
    view: '100K',
  },
  {
    id: 20,
    price: 20,
    discount: 180,
    view: '500K',
  },
  {
    id: 24,
    price: 24,
    discount: 216,
    view: '1M',
  },
];

let slider = document.querySelector('input[type=range]');
let btn = document.querySelector('input[type=checkbox]');
const pageViews = document.querySelector('.views__page');
const priceAmount = document.querySelector('.price__amount');
const pricePeriod = document.querySelector('.price__period');

let yearlyBilling = false;
let price = views[2].price;
let discountPrice = views[2].discount;

function handleInput(e) {
  let input = parseInt(e.target.value);

  views.forEach((item, index) => {
    let totalViews = item.view;
    let bg = index * 25;

    if (item.price === input) {
      price = item.price;
      discountPrice = item.discount;
      priceAmount.textContent = `$${price}.00`;
      pageViews.textContent = totalViews;
      slider.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) ${bg}%,
       hsl(223, 50%, 87%) ${bg}%)`;
    }

    if (yearlyBilling) {
      priceAmount.textContent = `$${discountPrice}.00`;
    }
  });
}

function handleClick(btn) {
  yearlyBilling = btn.currentTarget.checked;

  if (yearlyBilling) {
    priceAmount.textContent = `$${discountPrice}.00`;
    pricePeriod.textContent = `/yearly`;
  } else {
    priceAmount.textContent = `$${price}.00`;
    pricePeriod.textContent = `/monthly`;
  }
}

btn.addEventListener('click', handleClick);

slider.addEventListener('input', e => {
  handleInput(e);
});
