let tamanhoFonte = 16;

function toggleAcessibilidade() {
    const menu = document.getElementById('acessibilidadeMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function alterarTamanhoFonte(acao) {
    if (acao === 'aumentar') {
        tamanhoFonte += 2;
    } else if (acao === 'diminuir') {
        tamanhoFonte -= 2;
    }
    document.body.style.fontSize = tamanhoFonte + 'px';
}
