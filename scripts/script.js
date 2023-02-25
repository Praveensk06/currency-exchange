'use strict'
// get elements

const currencyOneEl = document.getElementById('currency1');
const AmountOneEl = document.getElementById("amount1");
const currencyTwoEl = document.getElementById('currency2');
const AmountTwoEl = document.getElementById("amount2");
const btnEl = document.getElementById("swap-btn");
const rateEl = document.getElementById("rate");


const url =
  `https://v6.exchangerate-api.com/v6/869324e2889de32c93218483/latest/`;

// function  calculate value
function calculate (){
  let currencyOne = currencyOneEl.value;
  let currencyTwo = currencyTwoEl.value;

// fetch url 
  fetch(`https://v6.exchangerate-api.com/v6/869324e2889de32c93218483/latest/${currencyOne}`)
  .then((response)=>response.json())
  .then((data)=>{
    let rate = data.conversion_rates[currencyTwo];
    rateEl.innerText=`1 ${currencyOne}=${rate.toFixed(2)} ${currencyTwo}`;

    AmountTwoEl.value= (AmountOneEl.value * rate).toFixed(2);
  });

};

// event listeners

currencyOneEl.addEventListener('change',calculate);
currencyTwoEl.addEventListener('change',calculate);

AmountOneEl.addEventListener('input' , calculate);
AmountTwoEl.addEventListener('input', calculate);

// btn
btnEl.addEventListener('click',()=>{
  let temp = currencyOneEl.value;
  currencyOneEl.value=currencyTwoEl.value;
  currencyTwoEl.value=temp;
  calculate()
});

calculate();