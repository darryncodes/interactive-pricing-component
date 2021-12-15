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

function handleInput(e) {
  let input = parseInt(e.target.value);

  views.forEach(element => {
    let price = element.price;
    let totalViews = element.view;
    let bg = input * 3;

    if (price === input) {
      priceAmount.textContent = `$${price}.00`;
      pageViews.textContent = totalViews;
      slider.style.background = `linear-gradient(90deg,
      hsl(174, 76%, 80%) ${bg}%,
     hsl(223, 50%, 87%) ${bg}%)`;
    }
  });

  /*

  if (input) {
    priceAmount.textContent = `$${input}.00`;
  }

  if (input === '8') {
    pageViews.textContent = '10k';
    slider.style.background = `linear-gradient(90deg,
      hsl(174, 76%, 80%) 0%,
     hsl(223, 50%, 87%) 0%)`;
  } else if (input === '12') {
    pageViews.textContent = '50k';
    slider.style.background = `linear-gradient(90deg,
      hsl(174, 76%, 80%) 25%,
     hsl(223, 50%, 87%) 25%)`;
  } else if (input === '16') {
    pageViews.textContent = '100k';
    slider.style.background = `linear-gradient(90deg,
      hsl(174, 76%, 80%) 50%,
     hsl(223, 50%, 87%) 50%)`;
  } else if (input === '20') {
    pageViews.textContent = '500k';
    slider.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) 75%,
       hsl(223, 50%, 87%) 75%)`;
  } else if (input === '24') {
    pageViews.textContent = '1M';
    slider.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) 100%,
       hsl(223, 50%, 87%) 100%)`;
  }

  */
}

// function handleClick(btn) {
//   if (btn.checked === false) {
//     priceAmount.textContent = (price / 100) * 1;
//   } else if (btn.checked) {
//     priceAmount.textContent = (price / 100) * 0.75;
//   }
// }

btn.addEventListener('click', handleInput);

slider.addEventListener('input', e => {
  handleInput(e);
});
