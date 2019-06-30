const scores = [10, 30 ,75 ,15 ,25 ,50 ,40 , 5, 80];
// filter method
const filterScores = scores.filter(score => {
  return score > 20;
});

console.log(filterScores);

const users = [
  {name: 'shaun', premium:true},
  {name: 'yoshi', premium:false},
  {name: 'mario', premium:false},
  {name: 'shaun', premium:true}
];

const premiumUsers = users.filter(user=> user.premium);

console.log(premiumUsers);

// math method
const prices = [10,20,30,25,15,40,80,5];

const salePrices = prices.map(price => price/2)

console.log(salePrices);

const products = [
  {name:'gold star',price:20},
  {name:'mushroom',price:40},
  {name:'green shells',price:30},
  {name:'banana skin',price:10},
  {name:'red shells',price:50}
];

const saleProducts = products.map(product =>{
  if(product.price > 30){
    return{name: product.name, price: product.price /2};
  }else{
    return product;
  }
});

console.log(saleProducts);

const result = scores.reduce((acc,curr) =>{
  if(curr > 30){
    acc++;
  }
  return acc;
}, 0);

console.log(result);

const score_p = [
  {name:'mario',score:20},
  {name:'yoshi',score:40},
  {name:'mario',score:30},
  {name:'crystal',score:10},
  {name:'yoshi',score:50}
];

const totalScore_p = score_p.reduce((acc,curr)=>{
  if( curr.name === 'yoshi'){
    acc += curr.score
  }
  return acc

}, 0);

console.log(totalScore_p);

// find Methods

const firstHighScore = scores.find(score => score>50);

console.log(firstHighScore);

// sort data
const names =['mario','shaun','chun-li','yoshi','luigi']
names.sort();

// score_p.sort((a,b) =>{
//   if(a.score > b.score){
//     return -1;
//   }else if(b.score >a.score){
//     return 1;
//   } else{
//     return 0;
//   }
// });

score_p.sort((a,b) => b.score - a.score);
console.log(score_p);

// const filtered = products.filter(product => product.price >20);
//
// const promos = filtered.map(product =>{
//   return `the ${product.name} is ${product.price / 2} pounds`
// });

const promos = products
  .filter(product => product.price >20)
  .map(product => `the ${product.name} is ${product.price / 2} pounds`)

console.log(promos);
