const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const final_score = document.querySelector('span');


form.addEventListener('submit', e =>{
  e.preventDefault();
  let score = 0;
  const userAnswers =[form.q1.value, form.q2.value,form.q3.value,form.q4.value];

  // check answers
  userAnswers.forEach((answer,index) =>{
    if(answer === correctAnswers[index]){
      score+= 25;
    };
  });
  scrollTo(0,0);
  result.classList.remove('d-none')


  let output = 0;
  const timer = setInterval(() =>{
    if (output!=score){
      output++;
      final_score.innerText = `${output}%`
    }else{
      clearInterval(timer);
    }
  }, 10
  );
});


// setTimeout(() =>{
//   alert('hello, ninja');
// }, 3000
// )
// let i = 0;
// const timer = setInterval(() =>{
//   console.log('hello');
//   i++
//   if(i===5){
//     clearInterval(timer);
//   }
// }, 1000);
