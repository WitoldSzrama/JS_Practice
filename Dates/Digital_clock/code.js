const span = document.querySelector('span')


span.innerText= new Date().toTimeString().slice(0,8);

setInterval(()=>span.innerText= new Date().toTimeString().slice(0,8),1000)
