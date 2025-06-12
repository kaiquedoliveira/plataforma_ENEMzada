document.addEventListener('DOMContentLoaded', function() {
  // Configurar para o formulário de feedback (se existir)
  const feedbackForm = document.getElementById('feedbackForm');
  const thankYouMessage = document.getElementById('thankYouMessage');
  
  if (feedbackForm && thankYouMessage) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmit(feedbackForm, thankYouMessage);
    });
  }

  // Configurar para o formulário de perfil (se existir)
  const profileForm = document.querySelector('.profile-info');
  
  if (profileForm && thankYouMessage) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmit(profileForm, thankYouMessage);
    });
  }

  function handleFormSubmit(form, thankYouMsg) {
    // Coletar dados do formulário (adaptar conforme necessário)
    const formData = new FormData(form);
    console.log('Formulário enviado:', Object.fromEntries(formData));
    
    // Esconder o formulário e mostrar mensagem de agradecimento
    form.style.display = 'none';
    thankYouMsg.style.display = 'block';
    thankYouMsg.scrollIntoView({ behavior: 'smooth' });
    
    // Limpar formulário (opcional)
    form.reset();
  }
});