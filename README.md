# rock-paper-scissors
## 2nd Iteration
The game can now be played to 5 with buttons!
Once a winner is declared, the game resets.
This is my first major javascript project.

## 1st Iteration
---
Rock Paper Scissors (RPS) game played against the computer.

First JavaScript project.

It is suggested to plan out the solution to the problem first as we've been tought in the last couple lessons so I will do that below after reading through and taking notes on the assignment.

Write a function called getComputerChoice.
  - Randomly returns either 'Rock', 'Paper', or 'Scissors'.

Write a function that plays a single round of RPS.
  - Takes two parameters:
    - playerSelection (case-insensitive i.e. rock ROCK RoCk will all work)
    - computerSelection
  - Returns:
    - string that declares the winner or tie
      - example: "You Lose! Paper beats Rock"

Write a function called playGame.
  - Use previous function inside this one.
  - Loop over or call this function 5 times in a row.
  - Now use console.log() to display results.
  - Use prompt() to get input from the user.

Pseudocode:

SET computerChoice
  CALL getComputerChoice with no parameters
    RETURN random string of 'Rock', 'Paper', or 'Scissors'
SET playerSelection
  PROMPT player
FOR 5 times
  CALL rockPaperScissors with playerSelection and computerSelection
    RETURN string that declares winner or tie each time
END FOR