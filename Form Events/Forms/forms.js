const form = document.querySelector('.signup-form');
const feedback= document.querySelector('.feedback');
//const username = document.querySelector('#username');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username=form.username.value;
form.addEventListener('submit', e => {
  e.preventDefault();
  const username=form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  if(usernamePattern.test(username)){
      feedback.textContent = 'that username is valid! ';
  } else{
      feedback.textContent = 'that username is incorrect! ';
    };
});
// let valid=''
// form.username.addEventListener('keyup',val =>{
//   if(!valid){
//     form.username.style.background = ('white)')
//   }
//   valid+=val.key
//   if (usernamePattern.test(valid)){
//     form.username.style.background = ('rgba(200, 247, 197, 0.8)')
//   }else{
//     form.username.style.background = ('rgba(224, 130, 131, 0.8)')
//     console.log(val);
//     console.log(valid);
//   };
// });

form.username.addEventListener('keyup', e =>{

  if (usernamePattern.test(e.target.value)){
    form.username.style.background = ('rgba(200, 247, 197, 0.8)');
  } else{
    form.username.style.background = ('rgba(224, 130, 131, 0.8)')
  };
});
