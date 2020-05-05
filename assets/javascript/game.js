let teamOneShootButton = document.querySelector("#teamone-shoot-button");
let teamOneNumshots = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")

teamOneShootButton.addEventListener("click", function () {
    console.log("SHOOTButton clicked")

    let newShotValue = Number(teamOneNumshots.innerHTML) + 1;
    // Calculate the new value for our counter:
    teamOneNumshots.innerHTML = newShotValue;
    var d = Math.random();
    if (d < 0.5) {
        console.log("Goals")
        let newGoalValue = Number(teamOneGoals.innerHTML) + 1
        teamOneGoals.innerHTML = newGoalValue;
    }

})

let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoNumshots = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")

teamTwoShootButton.addEventListener("click", function () {
    console.log("SHOOTButton clicked")

    let newShotValue = Number(teamTwoNumshots.innerHTML) + 1;
    // Calculate the new value for our counter:
    teamTwoNumshots.innerHTML = newShotValue;
    var d = Math.random();
    if (d < 0.5) {
        console.log("Goals")
        let newGoalValue = Number(teamTwoGoals.innerHTML) + 1
        teamTwoGoals.innerHTML = newGoalValue;
    }

})
let resetButton = document.querySelector("#reset-button");
let numberOfRESETS = document.querySelector("#num-resets");



// This is the "event listener" for clicking the reset button.
// Use the console.log function to display some text in the console when the button is clicked:
resetButton.addEventListener("click", function () {
    console.log("+ Reset clicked");
    // Calculate the new value for our counter:
    let newCounterValue = Number(numberOfRESETS.innerHTML) + 1;
    // Calculate the new number of resets:
    numberOfRESETS.innerHTML = newCounterValue;
    
});

