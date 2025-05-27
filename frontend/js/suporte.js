    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const closeChat = document.getElementById('close-chat');
    const openChatBtn = document.getElementById('open-chat-btn');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    const supportTyping = document.getElementById('support-typing');
    
    // Alternar visibilidade do chat
    function toggleChat() {
      chatContainer.style.display = chatContainer.style.display === 'flex' ? 'none' : 'flex';
    }
    
    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);
    openChatBtn.addEventListener('click', toggleChat);
    
    // Enviar mensagem
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message) {
        // Adicionar mensagem do usuário
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `${message}<div class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>`;
        chatMessages.appendChild(userMessage);
        
        // Limpar input
        messageInput.value = '';
        
        // Rolagem automática
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simular resposta do suporte
        simulateSupportResponse(message);
      }
    }
    
    // Simular resposta do suporte
    function simulateSupportResponse(userMessage) {
      // Mostrar "digitando..."
      supportTyping.style.display = 'block';
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Tempo aleatório entre 1 e 3 segundos
      const delay = 1000 + Math.random() * 2000;
      
      setTimeout(() => {
        supportTyping.style.display = 'none';
        
        const responses = [
          "Entendi sua dúvida. Vou verificar como posso te ajudar.",
          "Ótima pergunta! Deixe-me pesquisar sobre isso.",
          "Para resolver esse problema, você pode tentar o seguinte:...",
          "Agradecemos pelo seu contato. Nossa equipe está trabalhando para te ajudar.",
          "Esse é um questionamento comum. Aqui está a solução:..."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const supportMessage = document.createElement('div');
        supportMessage.className = 'message support-message';
        supportMessage.innerHTML = `${randomResponse}<div class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>`;
        chatMessages.appendChild(supportMessage);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, delay);
    }
    
    // Enviar com botão ou Enter
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    
    // Focar no input quando o chat abrir
    chatToggle.addEventListener('click', function() {
      if (chatContainer.style.display === 'flex') {
        messageInput.focus();
      }
    });