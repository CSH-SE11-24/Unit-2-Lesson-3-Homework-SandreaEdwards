// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "raccoon"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let letter = prompt("enter a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (word.includes(letter)){
  console.log("you got one letter")
}else{
  console.log("nope!")
}

// Prompt the user to guess the word 
 let guess = prompt("guess a word")

// Increase attempts by 1
attempts ++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (word === guess){
  console.log("you got the word!")
}else if (word !== guess){
  console.log("Nope!")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
// In the while loop, copy the prompt and if/else check for the word
// In the while loop, copy the attempts increment
let guessAgain;

while (word != guess){
  attempts++
  console.log(guessAgain = prompt("Guess again"))
  if (word === guess){
  console.log("you got the word!")
  }else if (word != guess){
  console.log("Nope!")
 } 
}


// After the while loop, print "It took (attempts) attempts" 
console.log(`It took ${attempts} attempts`)
