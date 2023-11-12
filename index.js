// 'use strict';

// (function () {
//   let min = 10000;
//   let max = 99999;
//   function Product(name, price, date) {
//     this.iD = Math.floor(Math.random() * (max - min + 1)) + min;
//     this.name = name;
//     this.price = price.toFixed(2);
//     this.date = date;
//     this.getCode = function () {
//       return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
//     };
//     this.getInfo = function () {
//       return `${this.getCode()}${this.iD},${this.name},${this.price}`;
//     };
//   }

//   const apples = new Product('Apples', 57, 2024);
//   const oranges = new Product('Oranges', 127, 2024);
//   const bannanas = new Product('Bannanas', 77, 2022);
//   const lemons = new Product('lemons', 97, 2026);
//   console.log(apples);
//   console.log(apples.getInfo());

//   function ShoppingBag() {
//     this.listOfProducts = [];
//     this.generateProducts = function (product) {
//       if (product.date > 2023) {
//         return this.listOfProducts.push(product);
//       }

//       return null;
//     };
//     this.getAvg = function () {
//       let sum = 0;
//       for (let i = 0; i < this.listOfProducts.length; i++) {
//         sum += Number(this.listOfProducts[i].price);
//       }
//       return (sum / this.listOfProducts.length).toFixed(3);
//     };
//     this.getMostExp = function () {
//       let max = -Infinity;
//       for (let i = 0; i < this.listOfProducts.length; i++) {
//         if (+this.listOfProducts[i].price > max) {
//           max = +this.listOfProducts[i].price;
//         }
//       }
//       return max;
//     };
//     this.calcMax = function () {
//       let sum = 0;
//       for (let i = 0; i < this.listOfProducts.length; i++) {
//         sum += Number(this.listOfProducts[i].price);
//       }
//       return sum;
//     };
//   }

//   const shopper1 = new ShoppingBag();

//   function PaymentCard(number, status, date) {
//     this.number = number.toFixed(2);
//     this.status = status.toLowerCase();

//     this.checkoutAndBuy = function (shoppingBag) {
//       let sum = 0;
//       if (this.status === 'active') {
//         for (let i = 0; i < shoppingBag.listOfProducts.length; i++) {
//           sum += Number(shoppingBag.listOfProducts[i].price);
//           console.log(sum);
//         }
//         if (number >= sum) {
//           return 'You have enough money for your purchase 👨🏼‍💻';
//         } else {
//           return `You are missing ${Math.abs(
//             sum - number
//           )} to complete this purchase! 👎🏼`;
//         }
//       }

//       return 'Account is innactive';
//     };
//   }

//   shopper1.generateProducts(apples);
//   shopper1.generateProducts(bannanas);
//   shopper1.generateProducts(oranges);
//   shopper1.generateProducts(lemons);
//   console.log(shopper1.listOfProducts);
//   console.log(shopper1.getAvg());
//   console.log(shopper1.getMostExp());
//   console.log(shopper1.calcMax());
//   const newBuyer = new PaymentCard(576, 'Active');
//   console.log(newBuyer.checkoutAndBuy(shopper1));
// })();

(function () {
  const continents = {
    asia: 'AS',
    northamerica: 'NA',
    southamerica: 'SA',
    africa: 'AF',
    australia: 'AU',
    europe: 'EU',
  };
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent;
  }

  const germany = new Country('Germany', '/', continents.europe);
  console.log(germany);
})();
