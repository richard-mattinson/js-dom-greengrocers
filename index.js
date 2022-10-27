const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

// function createItemTile(shopItem) {
//     const itemTile = document.createElement("li");
//     itemTile.setAttribute("class", "store--item-list, li");
//     itemTile.style.listStyle = "none";
//     return itemTile
// }
function renderBasket() {
  let basketTotal = 0;
  // console.log("Basket?", state.cart);

  const basket = document.querySelector(".cart--item-list");
  basket.innerHTML = ""; // this line must be before the for loop, or each item added to basket will replace the last

  for (let index = 0; index < state.cart.length; index++) {
    const basketItem = state.cart[index];

    let basketQty = basketItem.quantity;
    let basketPrice = basketItem.price;
    console.log("Basket Qty?", basketQty);

    const basketLine = document.createElement("li");
    basket.append(basketLine);
    basketLine.setAttribute("class", "cart--item-list, li");
    basketLine.style.listStyle = "none";

    const basketImg = document.createElement("img");
    basketLine.appendChild(basketImg);
    basketImg.setAttribute("class", "cart--item-icon");
    basketImg.src = "assets/icons/" + basketItem.id + ".svg";
    basketImg.alt = basketItem.name;
    basketImg.style.textTransform = "capitalize";

    const basketText = document.createElement("p");
    basketLine.appendChild(basketText);
    basketText.innerText = basketItem.name;
    basketText.style.textTransform = "capitalize";

    // BASKET QUANTITY
    const basketDecreaseQty = document.createElement("button");
    basketLine.appendChild(basketDecreaseQty);
    basketDecreaseQty.setAttribute("class", "quantity-btn remove-btn center");
    basketDecreaseQty.innerText = "-";
    basketDecreaseQty.addEventListener("click", () => {
      decrementBasket(basketItem, basketQty)
    });

    const basketDisplayQty = document.createElement("span");
    basketLine.appendChild(basketDisplayQty);
    basketDisplayQty.setAttribute("class", "quantity-btn quantity-text");
    basketDisplayQty.innerText = basketQty;
    console.log("Basket Counter?", basketQty); //state is updated, but DOM isn't?

    const basketIncreaseQty = document.createElement("button");
    basketLine.appendChild(basketIncreaseQty);
    basketIncreaseQty.setAttribute("class", "quantity-btn add-btn center");
    basketIncreaseQty.innerText = "+";
    basketIncreaseQty.addEventListener("click", () => {
      incrementBasket(basketItem, basketQty);
    });
    
    basketTotal += (state.cart[index].price * state.cart[index].quantity)
    
  }
  const basketTotalEl = document.querySelector(".total-number");
  basketTotalEl.innerText = `£${basketTotal.toFixed(2)}`;
  console.log("Basket Total?", basketTotal);
}

function incrementBasket(basketItem) {
  basketItem.quantity++;
  renderBasket();
}

function decrementBasket(basketItem) {
  if (basketItem.quantity > 1) {
    basketItem.quantity--;
    renderBasket();
  } else {
    state.cart.splice(state.cart.indexOf(basketItem), 1);
    console.log("Splice State", state.cart);
    renderBasket();
  }
}

// function addItemToBasket(basketItem) {
//   console.log("Basket state?", state.cart);

//   let tempItem = state.cart.find((items) => {
//     return items.id === shopItem.id;
//   });
//   if (tempItem !== undefined) {
//     basketItem.quantity++;
//   } else {
//     tempItem = { ...shopItem };
//     tempItem.quantity = 1;
//     state.cart.push(tempItem); // should I push a qty 1 here as well?
//     basketTotalValue += tempItem.price;
//     renderBasket();
//   }
//   // plusToBasketTotal();
// };

function renderShop() {
  // console.log("Items?", state.items);
  for (let index = 0; index < state.items.length; index++) {
    const shopItem = state.items[index];

    const shelf = document.querySelector(".store--item-list");

    const itemTile = document.createElement("li");
    shelf.append(itemTile);
    itemTile.setAttribute("class", "store--item-list, li");
    itemTile.style.listStyle = "none";

    const itemDiv = document.createElement("div");
    itemTile.append(itemDiv);
    itemDiv.setAttribute("class", "store--item-icon");

    const itemImg = document.createElement("img");
    itemDiv.appendChild(itemImg);
    itemImg.src = "assets/icons/" + shopItem.id + ".svg";
    itemImg.alt = shopItem.name;
    itemImg.style.textTransform = "capitalize";

    const addToBasketButton = document.createElement("button");
    itemTile.appendChild(addToBasketButton);
    addToBasketButton.setAttribute("class", "button");
    addToBasketButton.innerText = "add to basket";

    addToBasketButton.addEventListener("click", () => {
      console.log("Basket state?", state.cart);

      let basketItem = state.cart.find((items) => {
        return items.id === shopItem.id;
      });
      if (basketItem !== undefined) {
        basketItem.quantity++;
      } else {
        basketItem = { ...shopItem };
        basketItem.quantity = 1;
        state.cart.push(basketItem); // should I push a qty 1 here as well?
      }
      // plusToBasketTotal()
      renderBasket()
    });
  }
}

function run() {
  renderShop();
  renderBasket();
}

run();
