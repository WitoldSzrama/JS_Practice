const content=document.querySelector('p');

content.classList.add('error')
console.log(content.classList);

const para=document.querySelectorAll('p');

para.forEach(p =>{
  if (p.textContent.includes('success')){
    p.classList.add('success')
  } else if (p.textContent.includes('error')) {
    p.classList.add('error')
  };
});

const title = document.querySelector('.title');

totle.classList.toggle()
