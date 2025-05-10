const products = [
  {
    url: "https://images.meesho.com/images/products/420149018/trwal_400.webp",
    title: "Samsung A55 12GB 256GB Black",
    price: 37990,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/420149021/hkxt6_512.webp",
    title: "Samsung A55 8GB 256GB Light Blue",
    price: 34999,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/420149022/vpfzq_512.webp",
    title: "Samsung A35 8GB 256GB Black",
    price: 27999,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/420151183/k4jal_512.webp",
    title: "Vivo Y200e 8GB 128GB Saffron Delight",
    price: 18999,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/420151198/7iji5_512.webp",
    title: "Vivo Y200 Pro 8GB 128GB Silk Green",
    price: 22999,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/473636911/urpyz_512.webp",
    title: "VVivo X200 Pro 5G 16GB 512GB Cosmos Black",
    price: 91999,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/420152141/taw4t_512.webp",
    title: "Xiaomi Redmi 13C 4G 8GB 256GB Stardust Black",
    price: 10399,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/421224803/xtuvp_512.webp",
    title: "Oppo F25 PRO 5G 8GB 128GB Coral Purple",
    price: 21999,
    isFreeDelivry: true,
  },
  {
    url: "https://images.meesho.com/images/products/431868318/mx97w_512.webp",
    title: "Realme C55 8GB 128GB Rainforest",
    price: 13099,
    isFreeDelivry: true,
  },

  {
    url: "https://images.meesho.com/images/products/473636911/urpyz_512.webp",
    title: "VVivo X200 Pro 5G 16GB 512GB Cosmos Black",
    price: 91999,
    isFreeDelivry: true,
  },
  
  {
    url: "https://images.meesho.com/images/products/473711381/3z6l6_512.webp",
    title: "Redmi Note 14 Pro 5G 8GB 256GB Tịtan Black",
    price: 25499,
    isFreeDelivry: true,
  },
  
  {
    url: "https://images.meesho.com/images/products/438628510/egova_512.webp",
    title: "Redmi 12 6GB 128GB Jade Black",
    price: 9549,
    isFreeDelivry: true,
  },
];

const productList = document.querySelector(".product-list");
const images = document.querySelector(".product-img");
const title = document.querySelector(".title");
const price = document.querySelector(".price");

const createProduct = (url, title, price) => {
  const productDiv = document.createElement("div");

  productDiv.classList.add("product");
  productDiv.innerHTML = `
        <div class="card">
        <img
          src="${url}"
          alt="Product Image"
          class="product-img"
        />
        <p class="title">${title}</p>
        <h2 class="price">${price}</h2>
        <div class="product-buy center">
          <div class="counter center">
            <div class="add-cart center">Add to Cart</div>
            <div class="count-show">
              <div class="minus center">-</div>
              <div class="count-num center"></div>
              <div class="add center">+</div>
            </div>
        </div>
          <div type="button" class="buybtn center">Buy Now</div>
      </div>
      </div>`;
  productList.append(productDiv);
};

// products.forEach((element) => {
//   createProduct(element.url, element.title, element.price);
// });

const updateProductListeners = () => {
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    let countnum = 1;
    const counter = product.querySelector(".counter");
    const addCart = product.querySelector(".add-cart");
    const countShow = product.querySelector(".count-show");
    const countNumber = product.querySelector(".count-num");
    const addBtn = product.querySelector(".add");
    const minusBtn = product.querySelector(".minus");
    const card = counter.closest(".card");

    // Get the image URL, title, and price from within this card
    const img = card.querySelector(".product-img").src;
    const title = card.querySelector(".title").innerText;
    const rawPrice = card.querySelector(".price").innerText;
    const price = parseFloat(rawPrice.replace(/[^0-9.]/g, "")); // removes non-numeric characters

    let clickedProductDetails = {
      img: img,
      title: title,
      price: price,
    };

    addCart.addEventListener("click", () => {
      addCart.classList.add('hide')
      countShow.classList.add("show");
      countNumber.innerText = countnum;

      // let productDetails = JSON.stringify(clickedProductDetails);
      // localStorage.setItem("productDetails", productDetails);

      addToCart(clickedProductDetails.img,clickedProductDetails.title, clickedProductDetails.price);
      calculateTotalPrice(clickedProductDetails.price);
    });

    addBtn.addEventListener("click", () => {
      countnum++;
      countNumber.innerText = countnum;
      calculateTotalPrice(clickedProductDetails.price);
    });

    minusBtn.addEventListener("click", () => {
      if (countnum > 0) {
        countnum--;
        countNumber.innerText = countnum;
        if (countnum == 0) {
          countShow.classList.remove("show");
          addCart.classList.remove('hide')
          console.log(addCart.innerText);
        }
        deductAmount(clickedProductDetails.price)
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  products.forEach((element) => {
    createProduct(element.url, element.title, element.price);
  });
  updateProductListeners();
});


const wishlist = document.querySelector(".wishlist");

const addToCart = (imgurl, title, price) => {
  
  const wishlistItem = document.createElement('div')
  wishlistItem.classList.add('wishlist-item','center');
  
  wishlistItem.innerHTML = `
  <div class="item-img">
  <img src="${imgurl}" width="100%" height="100%" />
  </div>
  <div class="item-detail">
  <p class="item-name">${title}</p>
  <strong class="item-price">${price}</strong>
  </div>`;
  
  wishlist.append(wishlistItem)
  
  // let l = localStorage.getItem("productDetails");
  // let addedProduct = JSON.parse(l);
  // console.log(addedProduct);
  // console.log(typeof addedProduct);
};

const cartItemPrice = [];
const totalAmount = document.querySelector(".total-amount");

const calculateTotalPrice = (price) => {
  let finalPrice = 0;
  cartItemPrice.push(price);

  cartItemPrice.forEach((price) => {
    finalPrice = finalPrice + price;
    localStorage.setItem('cartTotal', finalPrice)
    totalAmount.innerText = `${finalPrice}`;
  });
};

const deductAmount = (price) => {
  let CartValtoDeduct = localStorage.getItem('cartTotal')
  let finalPrice = parseInt(CartValtoDeduct) - price 
  localStorage.setItem('cartTotal', finalPrice)
  totalAmount.innerText = `${finalPrice}`; 
}

