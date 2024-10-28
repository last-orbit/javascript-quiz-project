class Question {
    // YOUR CODE HERE:
    //
    constructor(text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    // const shuffleArray = array => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    // }


    // shuffleChoices(choices) {
    //         for (let i = choices.length - 1; i > 0; i--) {
    //           const j = Math.floor(Math.random() * (i + 1));
    //           [choices[i], choices[j]] = [choices[j], choices[i]];
    //         }

    //         return choices;
    //     }
     shuffleChoices() {
         // Fisher-Yates Shuffle
        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[j]] = [
              this.choices[j],
              this.choices[i],
            ];
        }

        return this.choices;
    }
};

// function shuffleChoices(choices) {
//     // Fisher-Yates Shuffle
//     for (let i = choices.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [choices[i], choices[j]] = [choices[j], choices[i]];
//       console.log("j", j);
//       console.log([choices[i], choices[j]]);
//     }

//     return choices;
//   }
