let totalPrice = document.getElementById("total_price");
let totalItems = document.getElementById("total_items");
const btn = document.getElementsByClassName("btn");
let price = 0;
let items = 0;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    if (items < 8) {
      price += parseInt(e.target.dataset.price);
      items++;
      totalPrice.innerText = price;
      totalItems.innerText = items;
    }
  });
}
