// Hands on 1
import {sumTwoNumbers} from './testing/helpers-testing.js';

const addItemToCart = (carts, newItemObject) => {
  // carts.push(newItemObject);
  // return carts;

  //Copy carts dengan spread operator
  const newCarts = [...carts, newItemObject];
  return newCarts;
};


const carts = [
  {
    id: "1",
    name: "Apple",
    quantity: 10,
    price: 5000,
  }
];

const updatedCarts = addItemToCart(carts, {
  id: "2",
  name: "Orange",
  quantity: 20,
  price: 4000,
});

console.log("original carts: ", carts);
console.log("updatedCarts: ", updatedCarts);





// //* Menambahkan item kedalam cart tanpa merubah original cart
// function addToCart(cart, newItem) {
//     return [...cart, newItem]
//   }
  
//   const cart = [
//     { name: "Apple", price: 5000 }
//   ]
  
//   const updatedCart = addToCart(cart, {
//     name: "Orange",
//     price: 4000
//   })
  
// //   console.log(updatedCart)
//   // [
//   //   { name: "Apple", price: 5000 },
//   //   { name: "Orange", price: 4000 }
//   // ]
  
// //   console.log(cart)
//   // [{ name: "Apple", price: 5000 }]    