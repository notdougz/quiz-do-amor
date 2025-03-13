//CAPTURES
const body = document.querySelector("body")
const levels = document.querySelectorAll('section');
    const alternatives = document.querySelectorAll("[name=alternative]");
    const alternatives2 = document.querySelectorAll("[name=alternative2]");
    const alternatives3 = document.querySelectorAll("[name=alternatives3]");
    const alternatives4 = document.querySelectorAll("[name=alternatives4]");
    const alternatives5 = document.querySelectorAll("[name=alternatives5]");

    

const listContent = document.querySelectorAll('nav > ul >li');
const btnGame = document.querySelectorAll('.btnGame')


//FUNCTIONS

function correctAnswer(correctAlternative, selectedAlternative, section){
   
    if(selectedAlternative === correctAlternative) {
        
        
        console.log('Você acertou')
        
        body.style.animation = 'correctAnswer 1s'
        setTimeout(() => {
            body.style.animation = ''
        }, 500); // Reset the animation property. This will prevent background animation from freezing.
    
        setTimeout(() => {
            levels[section].style.display = 'none';
            levels[section + 1].style.display = 'flex'
        }, 550); // This will do the next level be show

        time=0
    } else{
        
        
        console.log('Você errou')
        
        body.style.animation = 'wrongAnswer 1s'
        setTimeout(() => {
            body.style.animation = ''
        }, 500); // Reset the animation property. This will prevent background animation from freezing.

    
    }
    }
  
//ACTIONS



//LISTENERS 

btnGame[0].addEventListener('click', ()=>{
    const alternativesChecked = document.querySelector("[name=alternative]:checked").id

    correctAnswer(alternatives[2].id, alternativesChecked,0 )
})


btnGame[1].addEventListener('click', ()=>{
    const alternativesChecked = document.querySelector("[name=alternative2]:checked").id

    correctAnswer(alternatives[0].id, alternativesChecked,1 )
})

btnGame[2].addEventListener('click', ()=>{
    const alternativesChecked = document.querySelector("[name=alternative3]:checked").id

    correctAnswer(alternatives[2].id, alternativesChecked,2 )
})

btnGame[3].addEventListener('click', ()=>{
    const alternativesChecked = document.querySelector("[name=alternative4]:checked").id

    correctAnswer(alternatives[2].id, alternativesChecked,3 )
})

btnGame[4].addEventListener('click', ()=>{
    const alternativesChecked = document.querySelector("[name=alternative5]:checked").id

    correctAnswer(alternatives[1].id, alternativesChecked,4 )
})
