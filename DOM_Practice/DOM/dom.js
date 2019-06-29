// const para = document.querySelector('p');
// const para2 =document.querySelector('.error')
// const para3 = document.querySelector('div.error')
//
// console.log(para);
// console.log(para2);
// console.log(para3);
// console.log();
//
//
// const paras = document.querySelectorAll('p');
//
// console.log(paras);
// console.log(paras[1]);
//
// paras.forEach

const para = document.querySelector('p');

console.log(para.innerText);
const paras = document.querySelectorAll('p');

paras.forEach(para =>{
  console.log(para.innerText);
  para.innerText += ' new text';
});
para.innerText += ' Ninjas are awsome! ';


const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new h2 </h2>';

const people = ['Mario','Luigi','Yoshi','Ewa'];

people.forEach(person=>{
  content.innerHTML +=` <p> Hey my name is ${person} </p>`
});

const erp = document.querySelector('body > p');

erp.innerText = "lorem ipsum";


const link =document.querySelector('a')

console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja website';

const mssg = document.querySelector('body > p');


console.log(mssg.getAttribute('class'));

mssg.setAttribute('class','success');

console.log(mssg.getAttribute('class'));

mssg.setAttribute('style','color: blue;')
mssg.style.margin = '20px';
mssg.style.color = 'crimson';
console.log(mssg.style);
mssg.style.fontSize = '40px';



























//more space
