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
];

const productList = document.querySelector('.product-list')
const images = document.querySelector('.product-img')
const title = document.querySelector('.title');
const price = document.querySelector('.price')


const createProduct = (url, title, price) => {
  const productDiv = document.createElement("div");

  productDiv.classList.add("product");
  productDiv.innerHTML = `
                <img src="${url}" alt="Product Image" class="product-cart-img" />
                <div class="product-cart-info"><p class="product-cart-title">${title}</p>
            <b class="product-cart-price">₹${price}</b></div>`;
  productList.append(productDiv);
};

products.forEach((element) => {
  createProduct(element.url, element.title, element.price);
});
