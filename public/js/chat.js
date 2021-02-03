
const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}  

socket.on('connect', ()=>{

    
    let chatForm = document.querySelector('form');

    chatForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        //sending posted message to server
        socket.emit('postMessage', {
            username: chatUsername.value, 
            message: chatMessage.value
        })

        chatMessage.value = '';
        chatMessage.focus();
    })// end of event listener

    socket.on('updateMessages', (data)=>{

        //grab the container to display messgage
        
        let chatDisplay = document.querySelector('.chat-display');
        let newMessage = document.createElement('p');

        if(chatUsername.value === data.username){
            newMessage.className = "chat-text text-primary";
        }
        else{
            newMessage.className = "text-dark chat-text"
        }

        newMessage.innerHTML = `<strong>${data.username}</strong>(${formatDate(new Date())}): ${data.message}`;

        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    })


})