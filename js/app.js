'use strict';

var allProducts = [];
var maximumClicks = 5;
var actualClicks = 0;

var productContainer = document.getElementById('container');
var imageOneElement = document.getElementById('product-one');
var imageTwoElement = document.getElementById('product-two');
var imageThreeElement = document.getElementById('product-three');
var resultsList = document.getElementById('results');



function Product(name, src, shown) {
  this.name = name;
  this.src = 'img/${name}.${src}';
  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

