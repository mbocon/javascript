// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//     smallestNum: 1,
//     secretNum: null,
//     prevGuesses: [],
//     play: function () {
//       this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
//       this.getGuesses();
//     },
   
//     getGuesses: function () {
//      let guess;
     
//      while(guess !== 5) {
//     //    guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
//        this.prevGuesses.push(guess)
//      }
//     }
   
//     };
     
//    game.play()





const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function () {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      this.getGuesses();
    },
  
    getGuesses: function () {
      let guess;
  
      while (parseInt(guess) !== this.secretNum) {
        guess = prompt("Enter a number in between 1 and 100");
        if (guess === this.secretNum) {
          alert("You're right!");
        } else {
          alert("Incorrect! Try again!");
        }
      }
    }
  
  };
  
  game.play()