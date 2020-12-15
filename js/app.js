'use strict';

var allProducts = [];
var maximumClicks = 5;
var actualClicks = 0;

var productContainer = document.getElementById('container');
var imageOneElement = document.getElementById('product-one');
var imageTwoElement = document.getElementById('product-two');
var imageThreeElement = document.getElementById('product-three');
var resultsList = document.getElementById('results');



function Product(name, src) {
  this.name = name;
  this.src = 'img/${name}.${src}';
  this.views = 0;
  this.votes = 0;
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

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderProducts() {
  var productOneIndex = getRandomIndex(allProducts.length);
  var productTwoIndex = getRandomIndex(allProducts.length);
  var productThreeIndex = getRandomIndex(allProducts.length);

  // while ()
}

productOneElement.name = allProducts[productOneIndex].name;
productOneElement.alt = allProducts[productOneIndex].src;
productOneElement.title = allProducts[productOneIndex].src;
allProducts[productOneIndex].views++;

productTwoElement.src = allProducts[productTwoIndex].src;
productTwoElement.alt = allProducts[productTwoIndex].name;
roductTwoElement.title = allProducts[productTwoIndex].name;
allProducts[productTwoIndex].views++;

productThreeElement.src = allProducts[productThreeIndex].src;
productThreeElement.alt = allProducts[productThreeIndex].name;
productThreeElement.title = allProducts[productThreeIndex].name;
allProducts[productThreeIndex].views++;

function handleClick(event) {
  actualClicks++;
  var selectedProduct = event.target.title;

  for (var i = 0; i < allProducts.length; i++) {
    if (selectedProduct === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  renderProducts();

  if (actualClicks === maximumClicks) {
    myContainer.removeEventListener('click', handleClick);
    for (var j = 0; j < allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].name} was viewed ${allProducts[j].views} times and clicked ${allProducts[j].votes} times`;
      resultsList.appendChild(liElement);

      renderProducts();

      myContainer.addEventListener('click', handleClick);
    }
  }