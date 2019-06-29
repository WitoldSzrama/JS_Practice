
// for(let i = 0; i < 5; i++ ){
//   console.log('in loop', i)
// }
//
// const names= ['shaun','mario','luigi'];
//
// for(let i=0; i<names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`
//   console.log(html);
// }
// const password = 'password'
//
//
// if(password.length >=12 || password.includes('p')){
//   console.log("This password is huge!!");
// } else if(password.length >=8){
//   console.log("that password is long enough");
// }else{
//   console.log("password is to short!!");
// }




const calcArea = function(radius){
  return 3.14 * radius**2
};

const area = calcArea(5);

console.log(area);


const greet = () =>'hello, world';

const bill = (products,tax) =>{
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax
  }
  return total;
};

console.log(greet());

console.log(bill([3,5,8,9],0.1));

let people = ['mario','luigi','ryu','shaun','chun_li']


people.forEach(person =>{
  console.log(person)
});
