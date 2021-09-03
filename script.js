'use strict';

// Create the computers choice
let output= ''
const computerPlay = () => {
    const paper ='Paper';
    const rock ='Rock';
    const scissors = 'Scissors';
    let number = Math.floor(Math.random() * 3) + 1;
    console.log(number); 
    
    if(number === 1){
        output = paper;
    }else if(number ===2){
        output = rock;
    }else if(number ===3){
        output = scissors;
    }

    return output;
};
computerPlay()





const paper ='Paper';
const rock ='Rock';
const scissors = 'Scissors';
// Create single round game
const singleRound = (playerSelection, computerSelection) =>{
    if(playerSelection = paper && computerSelection === rock){
        console.log(`Man beats Machine! ${paper} covers ${rock}.`)
    }else if(playerSelection = paper && computerSelection === scissors){
        console.log(`Machine is triumphant! ${scissors} cut ${paper}.`)
    }else if(playerSelection = paper && computerSelection === paper){
        console.log('We have a tie Bitches!');
    }else if(playerSelection = rock && computerSelection === paper){
        console.log(`Machine is triumphant! ${paper} covers ${rock}.`)
    }else if(playerSelection = rock && computerSelection === scissors){
        console.log(`Man beats Machine! ${rock} smashes ${scissors}.`)
    }else if(playerSelection = rock && computerSelection === rock){
        console.log('We have a tie Bitches!');
    }else if(playerSelection = scissors && computerSelection === rock){
        console.log(`Machine is triumphant! ${rock} smashes ${scissors}.`);
    }else if(playerSelection = scissors && computerSelection === paper){
        console.log(`Man beats Machine! ${scissors} cut ${paper}.`)
    }else if(playerSelection = scissors && computerSelection === scissors){
        console.log('We have a tie Bitches!');
    }
}
const computerSelection = computerPlay()

singleRound('Paper', computerSelection)