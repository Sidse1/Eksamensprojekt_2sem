
document.getElementById('send-btn').addEventListener('click', function() {
    let input = document.getElementById('chat-input');
    let message = input.value;
    if (message.trim() !== '') {
        let chatContainer = document.createElement('div');
        chatContainer.classList.add('chat-container');
        
        let img = document.createElement('img');
        img.src = 'billede/elektriker.png';  // Opdater med relevant billede URL
        img.alt = 'profil billede';
        
        let p = document.createElement('p');
        p.classList.add('svar');
        p.textContent = message;
        
        let span = document.createElement('span');
        span.classList.add('chat-time-right');
        let currentTime = new Date();
        span.textContent = currentTime.getHours() + ':' + ('0' + currentTime.getMinutes()).slice(-2);
        
        chatContainer.appendChild(img);
        chatContainer.appendChild(p);
        chatContainer.appendChild(span);
        
        document.querySelector('.container-7').appendChild(chatContainer);
        input.value = '';
    }
});

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});