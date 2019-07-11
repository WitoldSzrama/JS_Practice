let t;
let old_key;
ball();
pinki = document.querySelector('.ran');

window.addEventListener('keydown', e=>{
  clearInterval(t)
  e.preventDefault();
console.log(old_key);
  pinki = document.querySelector('.ran');

  if(!(e.key=='ArrowUp' || e.key=='ArrowDown' || e.key=='ArrowLeft' || e.key=='ArrowRight')){

    switch(old_key){

      case 'ArrowUp':
        old_key='ArrowUp'
        t=setInterval(up,time);
        break;

      case 'ArrowDown':
        old_key='ArrowDown'
        t=setInterval(down,time)
        break;

      case 'ArrowLeft':
        old_key='ArrowLeft'
      t=setInterval(left,time);
        break;

      case 'ArrowRight':
        old_key='ArrowRight'
      t=setInterval(right,time);
        break;
      }
  }



  switch(e.key){

    case 'ArrowUp':
      old_key='ArrowUp'
      t=setInterval(up,time);
      break;

    case 'ArrowDown':
      old_key='ArrowDown'
      t=setInterval(down,time)
      break;

    case 'ArrowLeft':
      old_key='ArrowLeft'
    t=setInterval(left,time);
      break;

    case 'ArrowRight':
      old_key='ArrowRight'
    t=setInterval(right,time);
      break;


  }

});
