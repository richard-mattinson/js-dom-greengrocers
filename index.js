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
  console.log("Basket?", state.cart);
  for (let index = 0; index < state.cart.length; index++) {
    const basketItem = state.cart[index];
  
    const basket = document.querySelector(".cart--item-list");

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

    const basketIncreaseQty = document.createElement("button");
    basketLine.appendChild(basketIncreaseQty);
    basketIncreaseQty.setAttribute("class", "quantity-btn, remove-btn");
    basketIncreaseQty.innerText = "-"

    const basketDisplayQty = document.createElement("span");
    basketLine.appendChild(basketDisplayQty);
    basketDisplayQty.setAttribute("class", "quantity-btn, quantity-text");
    // basketDisplayQty.innerText = state.cart.quantity
    basketDisplayQty.innerText = "1"

    const basketDecreaseQty = document.createElement("button");
    basketLine.appendChild(basketDecreaseQty);
    basketDecreaseQty.setAttribute("class", "quantity-btn, add-btn");
    basketDecreaseQty.innerText = "+"
    }
}

function renderShop() {
  console.log("Items?", state.items);
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

    const addToBAsketButton = document.createElement("button");
    itemTile.appendChild(addToBAsketButton);
    addToBAsketButton.setAttribute("class", "button");
    addToBAsketButton.innerText = "add to basket";
    addToBAsketButton.addEventListener("click", () => {
      state.cart.push(shopItem);
      renderBasket()
    })
  }
}

function run() {  
  renderShop()
  renderBasket()
}

run();
