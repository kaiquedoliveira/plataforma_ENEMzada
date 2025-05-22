// Função para filtrar certificados
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const certificateCards = document.querySelectorAll('.certificate-card');
  const emptyMessage = document.getElementById('empty-certificates');
  
  // Verificar se há certificados para mostrar
  checkCertificates();
  
  // Adicionar eventos de clique aos botões de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover classe active de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adicionar classe active ao botão clicado
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filtrar certificados
      let hasVisibleCards = false;
      certificateCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
          hasVisibleCards = true;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Mostrar ou esconder mensagem de "nenhum certificado"
      if (!hasVisibleCards) {
        emptyMessage.style.display = 'block';
      } else {
        emptyMessage.style.display = 'none';
      }
    });
  });
  
  // Função para simular download de certificado
  window.downloadCertificate = function(courseId) {
    console.log(`Iniciando download do certificado para o curso: ${courseId}`);
    // Simular um atraso no download
    setTimeout(() => {
      alert(`Certificado do curso ${courseId} baixado com sucesso!`);
    }, 1000);
  };
  
  // Função para abrir modal de compartilhamento
  window.shareCertificate = function(courseId) {
    console.log(`Compartilhando certificado do curso: ${courseId}`);
    document.getElementById('shareModal').style.display = 'flex';
    document.getElementById('certificate-link').value = `https://enemzada.com/certificado/${courseId}-${Math.floor(Math.random() * 10000)}`;
  };
  
  // Função para fechar modal
  window.closeModal = function() {
    document.getElementById('shareModal').style.display = 'none';
  };
  
  // Função para compartilhar em redes sociais
  window.shareOnSocial = function(network) {
    const link = document.getElementById('certificate-link').value;
    let url = '';
    
    switch(network) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=Acabei%20de%20concluir%20um%20curso%20no%20ENEMzada!`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=Acabei%20de%20concluir%20um%20curso%20no%20ENEMzada!%20${encodeURIComponent(link)}`;
        break;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  // Função para copiar link
  window.copyToClipboard = function() {
    const linkInput = document.getElementById('certificate-link');
    linkInput.select();
    document.execCommand('copy');
    
    // Feedback visual
    const copyButton = document.querySelector('.copy-link');
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    
    setTimeout(() => {
      copyButton.innerHTML = originalText;
    }, 2000);
  };
  
  // Função para continuar curso
  window.continueCourse = function(courseId) {
    console.log(`Continuando curso: ${courseId}`);
    alert(`Redirecionando para continuar o curso ${courseId}`);
    // Aqui você pode redirecionar para a página do curso
    // window.location.href = `curso.html?id=${courseId}`;
  };
  
  // Função para verificar se há certificados
  function checkCertificates() {
    const hasCertificates = document.querySelectorAll('.certificate-card').length > 0;
    if (!hasCertificates) {
      emptyMessage.style.display = 'block';
    }
  }
});