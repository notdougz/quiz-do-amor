const btnStart = document.querySelector('#startBtn');


btnStart.addEventListener('click', ()=>{
    window.location.href = 'game.html'
})

window.onload = function() {
    var audio = document.getElementById("audio");
    audio.play();
};