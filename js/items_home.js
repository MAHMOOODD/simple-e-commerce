fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const swiper_items_sale = document.getElementById("swiper_items_sale");
    const swiper_items_Electronics = document.getElementById(
      "swiper_items_Electronics",
    );
    const swiper_items_Appliances = document.getElementById(
      "swiper_items_Appliances",
    );
    const swiper_items_Mobiles = document.getElementById(
      "swiper_items_Mobiles",
    );
    let htmlContent = "";
    let electoronics = "";
    let appliances = "";
    let mobiles = "";
    let discounthtml = "";
    let templete = "";
    let discount = 0;
    let old_pricehtml = "";
    data.forEach((item) => {
      if (item.old_price) {
        const disc = Math.round(
          ((item.old_price - item.price) / item.old_price) * 100,
        );
        discounthtml = `<span class="sale-present">%${disc}</span>`;
        old_pricehtml = `<p class="old-price">
                  $${item.old_price}
                </p>`;
      }

      templete = `
         <div class="swiper-slide product">

              


                ${discounthtml}
              <div class="img-product">
                <a href="#"><img src="${item.img}" alt="" /></a>
              </div>

              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>

              <p class="name-product">
                <a href="#"
                  >${item.name}</a
                >
              </p>
              <div class="price">
                <p><span>$${item.price}</span></p>
                  ${old_pricehtml}
              </div>
              <div class="icons">
                <span  class="btn-add-cart" data-id="${item.id}">
                  <i class="fa-solid fa-cart-arrow-down"></i> add to cart
                </span>
                <span class="icon-product">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>

            </div>
        `;
      if (item.catetory === "electronics") {
        electoronics += templete;
      }
      if (item.catetory === "appliances") {
        appliances += templete;
      }
      if (item.old_price) {
        htmlContent += templete;
      }
      if (item.catetory === "mobiles") {
        mobiles += templete;
      }
    });
    swiper_items_sale.innerHTML = htmlContent;
    swiper_items_Electronics.innerHTML = electoronics;
    swiper_items_Appliances.innerHTML = appliances;
    swiper_items_Mobiles.innerHTML = mobiles;

    var swiper = new Swiper(".slide-product", {
      slidesPerView: 5,
      spaceBetween: 20,
      observer: true,
      observeParents: true,

      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      autoplay: {
        delay: 3000,
      },
      loop: true,
      breakpointsBase: "window",
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  })
  .catch((err) => console.log(err));
