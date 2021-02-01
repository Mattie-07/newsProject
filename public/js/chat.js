
const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

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
            newMessage.className = "bg-success chat-text";
        }
        else{
            newMessage.className = "bg-secondary text-warning chat-text"
        }

        newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;

        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    })


})