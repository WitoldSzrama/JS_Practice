const getTodos = (resource) =>{

  return new Promise((resolve,reject) =>{

    const request =  new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
      //console.log(request, request.readyState);
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === 4){
        reject('error getting resource')
      };
    });

    request.open('GET',resource);
    request.send();

  });
};
// getTodos('todos/todos_1.json').then(data=>{
//   console.log('promise.resolved:',data);
// }).catch(err =>{
//   console.log('promise.rejected:',err);
// })

//chaining promises

getTodos('todos/todos.json').then(data=>{
  console.log('promise 1 resolved:',data);
  return getTodos('todos/todos_1.json');
}).then(data=>{
  console.log('promise 2 resolved:', data);
  return getTodos('todos/todos_2.json')
}).then(data=>{
  console.log('promise 3 resolved:', data);
}).catch(err =>{
  console.log('promise.rejected:',err);
})


// callback HELL

// getTodos('todos/todos.json',(err,data)=>{
//   console.log(data);
//   getTodos('todos/todos_1.json',(err,data)=>{
//     console.log(data);
//     getTodos('todos/todos_2.json',(err,data)=>{
//       console.log(data);
//     });
//   });
// });

// promise example
//
// const getSomething = () =>{
//   return new Promise((resolve,reject) =>{
//     //resolve('some data');
//     reject('some error');
//   });
// };
//
// // getSomething().then((data) =>{
// //   console.log(data);
// // }, (err) =>{
// //   console.log(err);
// // });
//
// getSomething().then(data =>{
//   console.log(data);
// }).catch(err =>{
//   console.log(err);
// });
