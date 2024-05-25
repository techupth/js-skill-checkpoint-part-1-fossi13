// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

// for (let i = 0; i < inventory.length; i++) {
//   let lowAll = inventory[i].quantity;
//   console.log(lowAll);
// }

const result = inventory.reduce((acc, curr) => {
  return acc.quantity < curr.quantity ? acc : curr;
});

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${result.name} ซึ่งมี ${result.quantity} ชิ้น`
);
