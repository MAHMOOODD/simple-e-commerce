let category_nav_list = document.querySelector(".category-nav-list");
let nav_links = document.querySelector(".nav-links");
function Open_categ_nav_list() {
  category_nav_list.classList.toggle("active");
}
function openCloseNav() {
  nav_links.classList.toggle("act");
}
let subtotal_checkout = document.querySelector(".subtotal_checkout");
let total_checkout = document.querySelector(".total_checkout");
let shipping = document.querySelector(".shipping");

let cart = document.querySelector(".cart");
let close_cart = document.querySelector(".close_cart");
let cart_count = document.querySelector(".count_item_cart");
let priceTotal = document.querySelector(".price_total");
let countCart = document.querySelector(".count-cart");

function openCloseCart() {
  cart.classList.toggle("deactive");
}

let cart_items = document.getElementById("cart_items");

fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    const btn_add_cart = document.querySelectorAll(".btn-add-cart");
    btn_add_cart.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const id = event.target.getAttribute("data-id");
        const item = data.find((p) => p.id == id);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find((i) => i.id == id);
        if (existingItem) {
          existingItem.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCart();
        } else {
          addToCart(item);
        }
        const allmatches = document.querySelectorAll(
          `.btn-add-cart[data-id ="${id}"]`,
        );
        allmatches.forEach((btn) => {
          btn.classList.add("active");
          btn.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i> added to cart`;
        });
      });
    });
  });

let carthtml = "";
let item_cart = document.getElementById("item_cart");
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...item, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}
function updateCart() {
  if (!cart_items) cart_items = document.getElementById("cart_items");
  updateCartCount();
  updateCartTotal();
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  

  cart_items.innerHTML = "";
  let checkoutCart = document.getElementById("items_checkout");
  if (checkoutCart) {
    checkoutCart.innerHTML = "";
  }

  cart.forEach((item, quantity) => {
    cart_items.innerHTML += `<div class="item_cart">
           <img src="${item.img}" alt="">
           <div class="item_content">
             <h4>${item.name}</h4>
             <p class="price_cart">$${item.price}</p>
             <div class="quantity_control">
              <button onclick = decrease(${item.id}) class="decrease">-</button>
              <span class="quantity">${item.quantity}</span>
              <button onclick = increase(${item.id}) class="increase">+</button>
             </div>
           </div>
           <button onclick = deleteItem(${item.id}) class="delete">
            <i class="fa-solid fa-trash-can"></i>
           </button>

         </div>`;
    if (checkoutCart) {
      checkoutCart.innerHTML += ` <div class="item_cart">
                <div class="image_name">
                  <img src="${item.img}" alt="" />
                  <div class="content">
                    <h4>
                      ${item.name}
                    </h4>
                    <div class="price_cart">$${item.price}</div>
                    <div class="quantity">
                      <button onclick = decrease(${item.id}) class="decrease">-</button>
                      <span class="count">${item.quantity}</span>
                      <button onclick = increase(${item.id}) class="increase">+</button>
                    </div>
                  </div>
                </div>

                <button onclick = deleteItem(${item.id}) class="delete_item">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>`;
    }
  });
}
function increase(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemselect = cart.find((i) => id === i.id);
  itemselect.quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}
function decrease(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemselect = cart.find((i) => id === i.id);
  itemselect.quantity = itemselect.quantity > 1 ? itemselect.quantity - 1 : 1;
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}

function deleteItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let newCart = cart.filter((i) => id !== i.id);
  localStorage.setItem("cart", JSON.stringify(newCart));
  updateCart();
  updateButtons(id);
}
updateCart();

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((acc, item) => acc + item.quantity, 0);
  cart_count.innerHTML = count;
  countCart.innerHTML = count;
}

function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let SHIPPING_COST = 20;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  priceTotal.innerHTML = `$${total}`;
   if(subtotal_checkout){
     subtotal_checkout.innerHTML = `$${total}.00`;
  if (total === 0) {
    SHIPPING_COST = 0;
    shipping.innerHTML = `$0.00`;
  } else {
    shipping.innerHTML = `$${SHIPPING_COST}.00`;
  }
  total_checkout.innerHTML = `$${total + SHIPPING_COST}.00`;
   } // Adding shipping cost
}

function updateButtons(id) {
  const matches = document.querySelectorAll(`.btn-add-cart[data-id ="${id}"]`);
  matches.forEach((btn) => {
    btn.classList.remove("active");
    btn.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i> add to cart`;
  });
}
