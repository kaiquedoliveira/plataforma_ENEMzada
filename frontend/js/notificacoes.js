  const bellIcon = document.querySelector('.fa-bell');
  const notificationContainer = document.querySelector('.notification-container');
  const closeButton = document.getElementById('close-notifications');
  
  
  bellIcon.addEventListener('click', () => {
    notificationContainer.style.display = 
      notificationContainer.style.display === 'none' || notificationContainer.style.display === '' 
      ? 'block' 
      : 'none';
  });

  closeButton.addEventListener('click', () => {
    notificationContainer.style.display = 'none';
  });