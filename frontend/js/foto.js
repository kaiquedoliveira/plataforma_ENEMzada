document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const imagePreview = document.getElementById('image-preview');
    const uploadProgress = document.querySelector('.upload-progress');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const uploadSuccess = document.getElementById('upload-success');

    fileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        // Verificar se é uma imagem
        if (!file.type.match('image.*')) {
            alert('Por favor, selecione um arquivo de imagem.');
            return;
        }

        // Verificar tamanho do arquivo (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('A imagem deve ter no máximo 5MB.');
            return;
        }

        // Mostrar preview da imagem
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);

        // Simular upload (substitua por código real de upload)
        simulateUpload(file);
    });

    function simulateUpload(file) {
        // Mostrar barra de progresso
        uploadProgress.style.display = 'block';
        
        // Simular progresso do upload
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';
            
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    uploadProgress.style.display = 'none';
                    showSuccessMessage();
                }, 500);
            }
        }, 200);
    }

    function showSuccessMessage() {
        uploadSuccess.style.display = 'block';
        
        // Esconder mensagem após 5 segundos
        setTimeout(() => {
            uploadSuccess.style.display = 'none';
        }, 5000);
    }
});