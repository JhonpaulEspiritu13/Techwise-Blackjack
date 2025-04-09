// --HTML Elements--
const playerActionsSection = document.querySelector("#playerActions");
const playerBettingSection = document.querySelector("#betting");
const bankrollSpan = document.querySelector("#playerBankroll");
const bankrollInput = document.querySelector("#users-wager");
const bankrollButton = document.querySelector("#users-bet");
const actionsSwitchButton = document.querySelector("#button-action-switch");
const bettingSwitchgButton = document.querySelector("#button-betting-switch");

// Consoles all gotten elements.
// console.log(playerActionsSection);
// console.log(playerBettingSection);
// console.log(bankrollSpan);
// console.log(bankrollInput);
// console.log(bankrollButton);
// console.log(actionsSwitchButton);
// console.log(bettingSwitchgButton);

// --Bankroll--
// Creates a bankroll object which represents
// how much the player is betting.
function Bankroll(initialBalance){
    this.value = initialBalance;
}

// Gets the current player bankroll value.
function getBankroll(){
    return playerBankroll.value;
}

// Given a value, set the player's bankroll.
function setBankroll(newBalance){
    if (Number.isInteger(newBalance)){
        playerBankroll.value = newBalance;
    }
    else{
        console.log(newBalance, "is not an integer value!");
    }
}

// Initializes the player's bankroll.
let playerBankroll = new Bankroll(2022);

// --HTML Functions--
// Handles when the player can set their bankroll.
function timeToBet(){
    // Hide #playerActions and displays betting.
    playerActionsSection.classList.add("should-hide");
    playerBettingSection.classList.remove("should-hide");
    // Set player bankroll to the bankroll span.
    bankrollSpan.textContent = getBankroll();

}

function timeToPlay(){
    playerActionsSection.classList.remove("should-hide")
    playerBettingSection.classList.add("should-hide");
}

// Looking at the current wager, set the bankroll.
function makeWager(){
    const wager = Number(bankrollInput.value);
    setBankroll(wager);
    console.log(`$${wager}`)
    bankrollSpan.textContent = getBankroll();
}

// --Event Listeners--
bankrollButton.addEventListener("click", makeWager);
actionsSwitchButton.addEventListener("click", timeToBet);
bettingSwitchgButton.addEventListener("click", timeToPlay);