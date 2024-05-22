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

function lowAll(cur) {
  return cur.map((acc) => acc.quantity <= 50);
}

let result = lowAll(inventory);

console.log(result);
