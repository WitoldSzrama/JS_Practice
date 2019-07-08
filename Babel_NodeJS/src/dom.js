console.log('DOM file');


const body = document.querySelector('body');

export const styleBody =() =>{
  body.style.background = 'peachpuff';
};

export const addTitle = text =>{
  const title =document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};


styleBody();
addTitle('hello world from the DOM file');
