const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

for (let index = 0; index < state.items.length; index++) {
  const storeItems = state.items[index];
  
const shelf = document.querySelector('.store--item-list');

const itemTile = document.createElement("li");
  shelf.append(itemTile);
  itemTile.setAttribute("class", "store--item-list, li");
  itemTile.style.listStyle = "none";

const itemImg = document.createElement("img");
  itemTile.appendChild(itemImg);
  itemImg.setAttribute("class", "store--item-icon");
  itemImg.src = "assets/icons/" + storeItems.id + ".svg"
  itemImg.alt = storeItems.name
  itemImg.style.textTransform = "capitalize";

const addToBAsketButton = document.createElement("button");
  itemTile.appendChild(addToBAsketButton);
  addToBAsketButton.setAttribute("class", "button");
  addToBAsketButton.innerText = "add to basket";
}
