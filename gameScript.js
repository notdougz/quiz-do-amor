// CAPTURA OS ELEMENTOS DO DOM
const body = document.querySelector("body");
const levels = document.querySelectorAll('section');
const alternatives = document.querySelectorAll("[name=alternative]");
const alternatives2 = document.querySelectorAll("[name=alternative2]");
const alternatives3 = document.querySelectorAll("[name=alternatives3]");
const alternatives4 = document.querySelectorAll("[name=alternatives4]");
const alternatives5 = document.querySelectorAll("[name=alternatives5]");

const listContent = document.querySelectorAll('nav > ul > li');
const btnGame = document.querySelectorAll('.btnGame');

// FUNÇÃO PARA VERIFICAR SE A ALTERNATIVA SELECIONADA ESTÁ CORRETA
function correctAnswer(correctAlternative, selectedAlternative, section) {
    if (selectedAlternative === correctAlternative) {
        console.log('Você acertou');

        // Animação de fundo para indicar resposta correta
        body.style.animation = 'correctAnswer 1s';
        setTimeout(() => {
            body.style.animation = '';
        }, 500); // Resetando a animação após 500ms para evitar travamento na animação de fundo.

        // Exibindo a próxima seção do jogo
        setTimeout(() => {
            levels[section].style.display = 'none';
            levels[section + 1].style.display = 'flex';
        }, 550); // Mudando de nível após 550ms

        time = 0; // Resetando o temporizador (não utilizado no código fornecido)
    } else {
        console.log('Você errou');

        // Animação de fundo para indicar resposta errada
        body.style.animation = 'wrongAnswer 1s';
        setTimeout(() => {
            body.style.animation = '';
        }, 500); // Resetando a animação após 500ms
    }
}


// LISTENERS DE CLICKS DOS BOTÕES DE JOGO
btnGame[0].addEventListener('click', () => {
    const alternativesChecked = document.querySelector("[name=alternative]:checked").id;
    correctAnswer(alternatives[2].id, alternativesChecked, 0);
});

btnGame[1].addEventListener('click', () => {
    const alternativesChecked = document.querySelector("[name=alternative2]:checked").id;
    correctAnswer(alternatives[0].id, alternativesChecked, 1);
});

btnGame[2].addEventListener('click', () => {
    const alternativesChecked = document.querySelector("[name=alternative3]:checked").id;
    correctAnswer(alternatives[2].id, alternativesChecked, 2);
});

btnGame[3].addEventListener('click', () => {
    const alternativesChecked = document.querySelector("[name=alternative4]:checked").id;
    correctAnswer(alternatives[2].id, alternativesChecked, 3);
});

btnGame[4].addEventListener('click', () => {
    const alternativesChecked = document.querySelector("[name=alternative5]:checked").id;
    correctAnswer(alternatives[1].id, alternativesChecked, 4);
});

// FUNÇÃO DE INTERAÇÃO COM OS BOTÕES DE "SIM" E "NÃO" NA PROPOSTA
document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const proposalDiv = document.getElementById("proposal");
    const responseDiv = document.getElementById("response");

    // Movimentação aleatória do botão "não" (noBtn)
    noBtn.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    // Ao clicar no botão "sim" (yesBtn), a proposta é ocultada e a resposta é exibida
    yesBtn.addEventListener("click", function () {
        proposalDiv.style.display = "none"; // Esconde os botões
        responseDiv.classList.remove("hidden"); // Exibe a mensagem de aceitação
    });
});
