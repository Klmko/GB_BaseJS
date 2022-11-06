'use strict';

const basketEl = document.querySelector('.cart_popup');
const basketCounterEl = document.querySelector('.cart_circle');
const basketTotalEl = document.querySelector('.cart_total');
const basketTotalValueEl = document.querySelector('.cart_total_val');

document.querySelector('.header__cart').addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {};

function rendercart() {
    document.querySelectorAll('.basketRow').forEach((el) => el.remove());
    let totalprice = 0;
    let totalcount = 0;

    Object.values(basket).forEach((el) => {
        basketTotalEl.insertAdjacentHTML("beforebegin",
            `<div class="basketRow">
        <div>${el.name}</div>
        <div>${el.count} шт.</div>
        <div>${el.price}$</div>
        <div>${el.price * el.count}$</div>
      </div>`
        );
        totalprice = totalprice + el.price * el.count;
        totalcount = totalcount + el.count;
    });

    basketCounterEl.textContent = totalcount;
    basketTotalValueEl.textContent = totalprice;

};

document.querySelector('.fetured_items__cards').addEventListener('click', addToCart);

function addToCart(event) {
    if (!event.target.closest('.fi__cart_addbox'))
        return;

    const data = event.target.closest('.fi__card').dataset;

    if (basket[data.id]) {
        basket[data.id].count++
    } else {
        basket[data.id] = { id: data.id, name: data.name, price: data.price, count: 1 };
    };

    rendercart();
}






// data {
//     id: '1',
//     name: 'Product1',
//     price: '10',
// }

// a[0] = 'xxx'
// a = ['xxx']


// basket {
//      '1': {
//           id: '1',
//           name: 'Product1',
//           price: '10',
//           count: '1',
//      };

//     '2': {
//             id: '1',
//             name: 'Product1',
//             price: '10',
//             count: '1',
//         }

// }
