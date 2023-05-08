const user =document.getElementById('user-choice')
const computer = document.getElementById('computer-choice')
const result = document.getElementById('result')
const counter = document.querySelector('#point')
const counter2= document.querySelector('#point2')

const img = document.querySelectorAll('img')

let userChoice;
let computerChoice;
let resultt;
let count =0;


img.forEach(img=>img.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    user.innerHTML=userChoice;
    getComputerChoice()
    getResult()
}))

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)

    if(randomNumber===0){
        computerChoice='rock ✊'
    }
    if(randomNumber===1){
        computerChoice='paper ✋'
    }
    if(randomNumber===2)[
        computerChoice='scissor ✌️'
    ]

    computer.innerHTML=computerChoice
}

function getResult(){
    if(userChoice===computerChoice){
        resultt='match is tie'
    }
    else if(userChoice==="rock ✊" && computerChoice==="paper ✋" 
    || userChoice==="paper ✋" && computerChoice==="scissor ✌️"
    || userChoice==="scissor ✌️" && computerChoice==="rock ✊"){
        resultt="🎉 computer won 🎉"
        count++
        counter2.innerHTML=count
    }
    
    else
    {
        resultt="🎉 user won 🎉"
        count++
        counter.innerHTML=count
    }

    result.innerHTML=resultt
}