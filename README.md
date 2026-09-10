# 🛒 Mahmoud Online Store — Simple E-Commerce Site

A responsive online store front-end with product sliders, a shopping cart, and a checkout flow — built with plain HTML, CSS, and JavaScript.

<p align="left">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="Swiper.js" src="https://img.shields.io/badge/Swiper.js-Slider-6332F6" />
</p>

🔗 **[Live Demo](https://mahmooodd.github.io/simple-e-commerce/)**

## 🖼️ Preview

<p align="center">
  <img src="./screenshots/home-preview.png" alt="Store homepage preview" width="90%" />
</p>

## ✨ Features

- 🏠 **Home page** with promo banners, category sliders (Swiper.js), and deal sections (On Sale, Electronics, Appliances, Mobiles)
- 🛍️ **Product catalog** loaded dynamically from `products.json`
- 🛒 **Shopping cart** — the only fully functional part: add/remove items, adjust quantity, live subtotal, persisted in `localStorage`
- 💳 **Checkout page UI** — delivery information form, coupon field, and order summary layout (not wired to a backend)
- 🎨 **Header UI** — search bar, category filter, wishlist (heart), and Login/Sign Up buttons are visual only for now, not functional yet

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Structure & Styling | HTML5, CSS3 |
| Logic | Vanilla JavaScript |
| Slider | Swiper.js |
| Icons | Font Awesome |
| Cart Persistence | Browser `localStorage` |

## 📂 Project Structure

```
simple-e-commerce/
├── index.html          # Homepage
├── checkOut.html        # Checkout page
├── css/
│   └── style.css
├── js/
│   ├── items_home.js    # Renders product sliders from products.json
│   ├── main.js           # Cart logic (add/remove/update, localStorage)
│   └── swiper.js         # Swiper slider configs
└── products.json         # Product data
```

## 🚀 Getting Started

```bash
git clone https://github.com/MAHMOOODD/simple-e-commerce.git
cd simple-e-commerce
```

Just open `index.html` in your browser — no build step or dependencies needed.

## 🗺 Roadmap

- [ ] Functional search & category filtering
- [ ] Wishlist (heart icon) functionality
- [ ] Real login / sign-up functionality
- [ ] Payment gateway integration

## 👤 Author

**Mahmoud Salah** — Computer Science student, Cairo University, focused on full stack development.

[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/MAHMOOODD)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahmoud-salah-b9a297338/)

---

© 2026 Mahmoud Salah. All rights reserved.
