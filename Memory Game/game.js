const cards = document.querySelectorAll('.content div');
const img = document.querySelectorAll('img');
const content = document.querySelector('.content');
const players = document.querySelectorAll('h2');
const images = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'];
let dubImages= images.concat(images);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(dubImages);

img.forEach(i =>{
      i.setAttribute('src',`IMG/${dubImages.pop()}`);
});


img.forEach(i=>{
  i.style.display = 'none';
});
let match=[]
let play_one=0;
let play_two=0;
let play = true;
let count = 0
players[0].style.background = 'green'

content.addEventListener('click', e =>{
  if(match.length <2){
        if(e.target.tagName == 'DIV'){
          if (e.target.children[0].style.display=='none'){
            e.target.children[0].style.display= '';
            match.push(e.target.children[0])
          }
        }

  }else{
    if(match[0].getAttribute('src')==match[1].getAttribute('src')){
      match[0].style.opacity = '0.5';
      match[1].style.opacity = '0.5';
      count ++
      if(play){
        play_one++
        players[0].innerText=` Player one ${play_one}`
        match[0].parentElement.style.background = 'green';
        match[1].parentElement.style.background = 'green';
        if (count=='10' && play_one>'5'){
          alert(`Player one you won with ${play_one} pairs!!`)
          location.reload();
        }else if (count=='10' && play_two>5) {
          alert(`Player two you won with ${play_two} pairs!!`)
          location.reload();
        }else if(count=='10'){
          alert('It is a draw with 5 pairs each')
          location.reload();
        }
      }else{
        play_two++
        players[1].innerText=` Player two ${play_two}`
        match[0].parentElement.style.background = 'red';
        match[1].parentElement.style.background = 'red';
        if (count=='10' && play_one<'5'){
            alert(`Player two you won with ${play_two} pairs!!`)
            location.reload();
        } else if (count=='10' && play_one>'5') {
          alert(`Player one you won with ${play_one} pairs!!`)
          location.reload();
        }else if(count=='10'){
          alert('It is a draw with 5 pairs each')
          location.reload();
        }
      }
      match = []

    }else{
        match[0].style.display = 'none';
        match[1].style.display = 'none';
        match = []
        play=!play;
        if(play){
          players[0].style.background = 'green'
          players[1].style.background = 'white'
        }else{
          players[0].style.background = 'white'
          players[1].style.background = 'red'
        }
    }
  }

  console.log(count);
});

console.log(players[0].innerText);





    // console.log(e.target.children[0].getAttribute());
