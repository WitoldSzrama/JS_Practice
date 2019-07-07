
//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
//add a new chat
newChatForm.addEventListener('submit',e =>{
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
  .then(()=> newChatForm.reset())
  .catch(err=>console.log(err));

});
//update username
newNameForm.addEventListener('submit', e =>{
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(()=>updateMssg.innerText ='',3000);

});
//update Chatroom
rooms.addEventListener('click', e =>{
  if(e.target.tagName == 'BUTTON'){
    chatUi.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUi.render(chat));
  }

});
//checkLs
const username = localStorage.username ? localStorage.username : 'anon';
//class instances
const chatUi = new ChatUi(chatList)
const chatroom = new Chatroom('general', username);


//get chats and render
chatroom.getChats(data=>  chatUi.render(data));
