// Seleciona o botão de início (start) no DOM
const btnStart = document.querySelector('#startBtn');

// Adiciona um ouvinte de evento de clique ao botão de início
btnStart.addEventListener('click', () => {
    // Redireciona o usuário para a página do jogo (game.html) ao clicar no botão
    window.location.href = 'game.html';
});

// Função executada quando a janela (window) é carregada
window.onload = function() {
    // Obtém o elemento de áudio (presumivelmente uma tag <audio>) no DOM
    var audio = document.getElementById("audio");

    // Reproduz o áudio assim que a página for carregada
    audio.play();
};
