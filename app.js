let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scisssors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
} 
const drawGame = () => {
    msg.innerText = "Game was Draw. Try Again!";
    msg.style.backgroundColor = "yellow";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
         compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }  else {
        compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
}); 