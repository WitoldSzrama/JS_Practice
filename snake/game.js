let t;
ball();
pinki = document.querySelector('.ran');
window.addEventListener('keydown', e=>{

  clearInterval(t)

  pinki = document.querySelector('.ran');

  switch(e.key){

    case 'ArrowUp':
      t=setInterval(up,time);
      break;

    case 'ArrowDown':
      t=setInterval(down,time)
      break;

    case 'ArrowLeft':
    t=setInterval(left,time);
      break;

    case 'ArrowRight':
    t=setInterval(right,time);
      break;


  }

});
