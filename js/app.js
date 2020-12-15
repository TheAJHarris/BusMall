'use strict';
// console.log('hello');
var allProducts = [];
var maximumClicks = 5;
var actualClicks = 0;

var productContainer = document.getElementById('container');
var productOneElement = document.getElementById('product-one');
var productTwoElement = document.getElementById('product-two');
var productThreeElement = document.getElementById('product-three');
var resultsList = document.getElementById('results');



function Product(name, src) {
  this.name = name;
  this.src = `img/${name}.${src}`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('usb', 'gif');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderProducts() {
  var productOneIndex = getRandomIndex(allProducts.length);
  var productTwoIndex = getRandomIndex(allProducts.length);
  var productThreeIndex = getRandomIndex(allProducts.length);

  // while ()
  allProducts[productOneIndex].views++;
  allProducts[productTwoIndex].views++;
  allProducts[productThreeIndex].views++;

  var displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productOneIndex].name;
  productOneElement.appendChild(displayElement);

  var displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productOneIndex].src);
  productOneElement.appendChild(displayImage);

  displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productTwoIndex].name;
  productTwoElement.appendChild(displayElement);

  displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productTwoIndex].src);
  productTwoElement.appendChild(displayImage);

  displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productThreeIndex].name;
  productThreeElement.appendChild(displayElement);

  displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productThreeIndex].src);
  productThreeElement.appendChild(displayImage);
}

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
    productContainer.removeEventListener('click', handleClick);
    for (var j = 0; j < allProducts.length; j++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${allProducts[j].name} was viewed ${allProducts[j].views} times and clicked ${allProducts[j].votes} times`;
      resultsList.appendChild(liElement);
    }
  }
}

renderProducts();

productContainer.addEventListener('click', handleClick);
