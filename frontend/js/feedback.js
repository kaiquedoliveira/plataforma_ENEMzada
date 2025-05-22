document.addEventListener('DOMContentLoaded', function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário
    const formData = {
      type: document.getElementById('feedbackType').value,
      message: document.getElementById('feedbackMessage').value,
      rating: document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : null,
      email: document.getElementById('userEmail').value
    };
    
    // Aqui você pode adicionar código para enviar os dados para um servidor
    // Por exemplo, usando fetch() para uma API
    
    // Simular envio (apenas para demonstração)
    console.log('Feedback enviado:', formData);
    
    // Esconder o formulário e mostrar mensagem de agradecimento
    feedbackForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
    
    // Opcional: Rolagem suave para a mensagem de agradecimento
    thankYouMessage.scrollIntoView({ behavior: 'smooth' });
    
    // Limpar formulário (opcional, já que está escondido)
    feedbackForm.reset();
    
    // Para um sistema real, você poderia adicionar aqui:
    // - Validação adicional
    // - Envio AJAX para o servidor
    // - Tratamento de erros
    // - Redirecionamento ou outras ações após envio
  });
  
  // Validação em tempo real (opcional)
  const feedbackMessage = document.getElementById('feedbackMessage');
  feedbackMessage.addEventListener('input', function() {
    if (feedbackMessage.value.length > 500) {
      feedbackMessage.setCustomValidity('O feedback não pode ter mais de 500 caracteres.');
    } else {
      feedbackMessage.setCustomValidity('');
    }
  });
});