'use strict';

let views = [
  {
    id: 0,
    pageviews: '10K',
  },
  {
    id: 1,
    pageviews: '50K',
  },
  {
    id: 2,
    pageviews: '100K',
  },
  {
    id: 3,
    pageviews: '500K',
  },
  {
    id: 4,
    pageviews: '1M',
  },
];
// let price = [8, 12, 16, 20, 24];
// let views = ['10k', '50k', '100k', '500k', '1m'];

let slider = document.querySelector('input[type=range]');
let btn = document.querySelector('input[type=checkbox]');
const pageViews = document.querySelector('.views__page');
const priceAmount = document.querySelector('.price__amount');
// const pricePeriod = document.querySelector('.price__period');

function figures() {
  let value = parseInt(slider.value);

  if (btn.checked) {
    priceAmount.textContent = `$${value * 0.75}.00`;
  } else if (btn.checked === false) {
    priceAmount.textContent = `$${value * 1}.00`;
  }

  //   //   const view = views.values();
  //   for (let obj of views) {
  //     // pageViews.textContent = value;
  //     console.log(value);
  //     if (obj.id === obj.pageviews) {
  //       pageViews.textContent = obj.pageviews;
  //     }
  //   }

  //   const iterator = views.values();

  //   for (const value of iterator) {
  //     console.log(value);
  //   }
}

// function viewUpdate() {
//   for (var i = 0; i < views.length; i++) {
//     pageViews.textContent = views[i];
//   }
// }

btn.addEventListener('click', () => {
  figures();
});
slider.addEventListener('input', () => {
  figures();
  //   viewUpdate();
  //   pageViews.innerHTML = views[slider.value];
});
