'use strict';
// console.log('hello');
var allProducts = [];
var maximumClicks = 25;
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

Product

var retrievedProducts = localStorage.getItem('products');
if(retrievedProducts){
  allProducts = JSON.parse(retrievedProducts);
} else {
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
}



function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderProducts() {
  var productOneIndex = getRandomIndex(allProducts.length);
  var productTwoIndex = getRandomIndex(allProducts.length);
  while (productTwoIndex === productOneIndex) {
    productTwoIndex = getRandomIndex(allProducts.length);
  }
  var productThreeIndex = getRandomIndex(allProducts.length);
  while (productThreeIndex === productTwoIndex || productThreeIndex === productOneIndex) {
    productThreeIndex = getRandomIndex(allProducts.length);
  }





  productOneElement.innerHTML = '';
  productTwoElement.innerHTML = '';
  productThreeElement.innerHTML = '';
  // while ()
  allProducts[productOneIndex].views++;
  allProducts[productTwoIndex].views++;
  allProducts[productThreeIndex].views++;

  var displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productOneIndex].name;
  productOneElement.appendChild(displayElement);

  var displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productOneIndex].src);
  displayImage.setAttribute('title', allProducts[productOneIndex].name);
  productOneElement.appendChild(displayImage);

  displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productTwoIndex].name;
  productTwoElement.appendChild(displayElement);

  displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productTwoIndex].src);
  displayImage.setAttribute('title', allProducts[productTwoIndex].name);
  productTwoElement.appendChild(displayImage);

  displayElement = document.createElement('h2');
  displayElement.textContent = allProducts[productThreeIndex].name;
  productThreeElement.appendChild(displayElement);

  displayImage = document.createElement('img');
  displayImage.setAttribute('src', allProducts[productThreeIndex].src);
  displayImage.setAttribute('title', allProducts[productThreeIndex].name);
  productThreeElement.appendChild(displayImage);
}

function handleClick(event) {
  actualClicks++;
  console.log(actualClicks);
  var selectedProduct = event.target.title;

  for (var i = 0; i < allProducts.length; i++) {
    if (selectedProduct === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  renderProducts();

  if (actualClicks === maximumClicks) {
    productContainer.removeEventListener('click', handleClick);

    renderChart();

    alert ('Thank you for taking the BusMall survey!!!');

    var stringifiedProducts = JSON.stringify(allProducts);
    localStorage.setItem('products', stringifiedProducts);
  }
}

function renderChart(){
  var productArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allProducts.length; i++){
    productArray.push(allProducts[i].name);
    votesArray.push(allProducts[i].votes);
    viewsArray.push(allProducts[i].views);
  }
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productArray,
      datasets: [{
        label: 'Total Votes',
        data: votesArray,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 5
      },
      {
        label: 'Total Views',
        data: viewsArray,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 3
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

renderProducts();

productContainer.addEventListener('click', handleClick);
