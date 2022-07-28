const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gamerOver = document.querySelector('.gamer-over')
const stopClouds = document.querySelector('.clouds')
const perdeuGame = document.querySelector('.fim-jogo')
const reiniciar = document.querySelector('.btn')

const jump = () => { //Esta adicionando a class jump na img do mario
    mario.classList.add('jump') 

    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 700) //setTimeout(função, tempo) recebe 2 informações
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //quando adicionamos o + é para transformamos a informação da string em number
    const cloudsPosition = +window.getComputedStyle(stopClouds).right.replace('px', '');
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ 

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.style.display = 'none';
        gamerOver.style.bottom = `${marioPosition}px`
        gamerOver.style.display = 'block'
        stopClouds.style.right = `${cloudsPosition}px`
        stopClouds.style.animation = 'none'
        perdeuGame.style.display = 'block';
        reiniciar.style.display = 'block';
    }
    
    function Reiniciar(onclick){
        
    }

}, 10);


document.addEventListener('keydown', jump); //Esse evento é preciso dizer o que fará ele ocorre e qual será sua função
