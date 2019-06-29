// const button = document.querySelector('button');
//
// button.addEventListener('click',() =>{
//   console.log('you clicked me');
// });
//const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
const button = document.querySelector('button')
const ul = document.querySelector('ul');

button.addEventListener('click',() =>{
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.append(li);
});


//ul.remove()

// items.forEach(item=>{
//   item.addEventListener('click', e =>{
//     //console.log('item clicked');
//     // console.log(e);
//     //console.log(e.target);
//     //e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });
ul.addEventListener('click', e =>{
  console.log(e.target);
  if(e.target.tagName === 'LI'){
    e.target.remove()
  }
});
