// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"



// create a function with 2 parameters for player 1 and player 2
const rps = (p1, p2) => {
  
//   if player 1 and player 2 use the same move then return 'Draw!'
  
  if (p1 === p2) {
    return "Draw!";
  };
  
/*
if player 1 chooses 'rock', and if player 2 chooses 'scissors', then return 'Player 1 won!'
but if player 1 chooses 'rock', and if player 2 chooses 'paper', then return 'Player 2 won!'
*/
  
  if (p1 === 'rock') {
    if (p2 === 'scissors') {
      return 'Player 1 won!';
    } else if (p2 === 'paper') {
      return 'Player 2 won!';
    };
  };
  
/*
if player 1 chooses 'paper', and if player 2 chooses 'rock', then return 'Player 1 won!'
but if player 1 chooses 'paper', and if player 2 chooses 'scissors', then return 'Player 2 won!'
*/
  
  if (p1 === 'paper') {
    if (p2 === 'rock') {
      return 'Player 1 won!';
    } else if (p2 === 'scissors') {
      return 'Player 2 won!';
    };
  };
  
/*
if player 1 chooses 'scissors', and if player 2 chooses 'paper', then return 'Player 1 won!'
but if player 1 chooses 'scissors', and if player 2 chooses 'rock', then return 'Player 2 won!'
*/
  
  if (p1 === 'scissors') {
    if (p2 === 'paper') {
      return 'Player 1 won!';
    } else if (p2 === 'rock') {
      return 'Player 2 won!';
    };
  };
};
