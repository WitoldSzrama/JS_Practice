let pinki = document.querySelector('.ran')
const score_h1 = document.querySelector('h1')
const div = document.querySelectorAll('.table div')
let snake = document.querySelectorAll('.snake')
let head = 1;
let snake_tail=[];
let head_story = []
let score = 0;
let time = 90;


ide =1;
div.forEach(e =>{
  e.setAttribute('id',ide)
  ide++
});

const speedUp = ()=>{
  if(score==300 ||
    score==600 ||
    score==900 ||
    score==1200 ||
    score==1500 ||
    score==1800 ||
    score==2100 ||
    score==2100
  ){
    time-=10;
  }
  };


ide =1;
let check = () => {div.forEach(e =>{
  if(ide==e.getAttribute('id')){
    e.classList.add('head')
    head = e.getAttribute('id')
    head_story.push(head)
    snake_tail[0] = head_story[head_story.length-1];
    make_tail()

  }else{
    if(e.classList.contains('head')){
      e.classList.remove('head')
    };
  };
});
};

let catch_ball = ()=>{
  if(pinki.id == head){
    snake_tail.push(pinki.id)
    pinki.classList.remove('ran')

    //pinki.classList.add('snake')
    //snake = document.querySelectorAll('.snake')
    score+=50;
    ball();
    speedUp();
    score_h1.innerText =`Score:  ${score} `
    pinki = document.querySelector('.ran');
  }
};

let make_tail = () =>{
  for(let i=0;i<snake_tail.length;i++){
    snake_tail[i] = head_story[head_story.length - 1-i]

  }

};

let paint_tail = () =>{
  div.forEach( e=>{
    snake_tail.forEach( f=>{
      if(e.id == f){
        e.classList.add('head');
      }
    });
  });
};


let ball = ()=>{
  let eat = Math.floor(Math.random()*1600 +1);

  while(snake_tail.includes(eat)){
    eat = Math.floor(Math.random()*1600 +1);
  }

  div.forEach(e=>{
    if(e.id==eat){
      e.setAttribute('class','ran')
    }
    });
};


let lost = () =>{
  let l = snake_tail.filter( e=>{
      return e==snake_tail[0];
  });

  if(l.length>1){
    let locals =localStorage.getItem('bestScore')

    if(!locals){
      localStorage.setItem('bestScore','0')
    };
    
    if(locals>score){
      alert(`Your score is ${score}`)
      location.reload();
    }else{
      alert(`You are new king of snake. Your score is ${score}`)
      localStorage.setItem('bestScore',score);
      location.reload();
    }

  }
}


const up = ()=>{
  catch_ball();
  ide -=40;
  if(ide<0){
    ide+=1600;
  }
  console.log(ide);
  check();
  paint_tail();
  lost();
};

const down = ()=>{
  catch_ball();
  ide +=40;
  if(ide>1600){
    ide-=1600;
  }
  console.log(ide);
  check()
  paint_tail();
  lost();
}

const left = ()=>{
  catch_ball();
  if((ide-1)%40){
    ide--;
  }else{
      ide+=39;
  }
   console.log(ide);
   check()
   paint_tail();
   lost();
}

const right = ()=>{
  catch_ball();
  if(ide%40){
    ide++;
  }else{
      ide-=39;
  }
  console.log(ide)
  check()
  paint_tail();
  lost();
}
