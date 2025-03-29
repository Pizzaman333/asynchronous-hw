let count = 0;
const maxMessages = 5;
const interval = 1000;
const messagesDiv = document.getElementById('messages');

function addMessage() {
    count++;
  
    messagesDiv.innerHTML += `<div class="message">Повідомлення №${count}</div>`;
  
    if (count >= maxMessages) {
      clearInterval(timer); 
    }
  }
  let timer;
document.querySelector(".button-start").addEventListener("click", e => {
    messagesDiv.innerHTML = "";
    count = 0;
    clearInterval(timer); 
   timer = setInterval(addMessage, interval);
})