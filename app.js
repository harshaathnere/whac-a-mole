const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result =0;
let hitPosition
let timeId = null;
let currentTime = 60;
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() *9)];
    //console.log(randomPosition) ;
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
    console.log('hit positoon',hitPosition)
}

squares.forEach(square => {
    square.addEventListener('click' ,()=>{
        if(square.id == hitPosition){
            result++
            console.log("result---->",result);
            score.innerHTML = result
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
   
    timeId = setInterval(randomSquare, 1000)
}
moveMole();
function countDown(){
currentTime--
timeLeft.textContent = currentTime
if(currentTime ==0){
    clearInterval(countDownTimerId);
    clearInterval(timeId);
    alert('Game Over2!! final score is' + result)
}
}
let countDownTimerId = setInterval(countDown,1000)