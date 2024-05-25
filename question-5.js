// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  if (promotionCode === "SALE20") {
    totalPrice *= 0.8;
  } else if (promotionCode === "SALE50") {
    totalPrice *= 0.5;
  }

  return totalPrice;
}

console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
