document.addEventListener('DOMContentLoaded', () => {
  const btnAbrir = document.getElementById("acessibilidadeBtn");
  const menu = document.getElementById("menuAcessibilidade");
  const btnFechar = document.getElementById("fecharAcessibilidade");

  btnAbrir.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.setAttribute('aria-hidden', 'false');
  });

  btnFechar.addEventListener("click", () => {
    menu.style.display = "none";
    menu.setAttribute('aria-hidden', 'true');
  });
});
let tamanhoFonte = 100;
function alterarFonte(acao) {
    if (acao === 'aumentar' && tamanhoFonte < 150) {
        tamanhoFonte += 10;
    } else if (acao === 'diminuir' && tamanhoFonte > 80) {
        tamanhoFonte -= 10;
    }
    document.body.style.fontSize = tamanhoFonte + '%';
}

function alternarContraste() {
    document.body.classList.toggle('contraste');
}
