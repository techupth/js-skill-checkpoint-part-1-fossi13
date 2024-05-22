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
// เริ่มเขียนโค้ดตรงนี้

let totalAll = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(totalAll);

// let totalAll =
//   products[0].price * products[0].quantity +
//   products[1].price * products[1].quantity +
//   products[2].price * products[2].quantity;
// console.log(totalAll);

function calculateTotalPrice(promotionCode) {
  if (promotionCode == "") {
    return "ไม่มี";
  } else if (promotionCode == 68) {
    return "SALE20";
  } else if (promotionCode == 42.5) {
    return "SALE20";
  }
}

console.log(calculateTotalPrice(promotionCode));
