let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userDisp=document.querySelector("#user");
const compDisp=document.querySelector("#comp");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    
    msg.innerText="Game was Draw ('_')";
    msg.style.backgroundColor="rgb(73, 29, 29)";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin===true) {
        
        msg.innerText=`You Win(.'_'.) : ${userChoice} > ${compChoice}` ;
        msg.style.backgroundColor="green";
        userScore++;
        userDisp.innerText=`${userScore}`;
    } else {
       
        msg.innerText=`You Lose(;_;) :  ${userChoice} < ${compChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compDisp.innerText=`${compScore}`;
    }
};

const playGame=(userChoice)=>{
    
    // generate comp choice
    const compChoice=genCompChoice();
    

    if (userChoice===compChoice) {
        drawGame();
    }else{
        let userWin=true;
        if (userChoice ==="rock") {
            userWin = compChoice ==="paper"?false:true;
        }else if (userChoice ==="paper") {
            userWin = compChoice==="scissors"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

