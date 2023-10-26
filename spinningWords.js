// function spinWords(string) {
//   //TODO Have fun :)
//   let array = string.split(" ");
//   let reversed;
//   let finalWord = [];
//   array.forEach(function (word) {
//     if (word.length >= 5) {
//       if (word == array[array.length - 1]) {
//         console.log(word);
//         reversed = word.split("").reverse().join("");
//       } else {
//         console.log(word);
//         reversed = word.split("").reverse().join("") + " ";
//       }
//       finalWord.push(reversed);
//     } else {
//       if (word == array[array.length - 1]) {
//         finalWord.push(word);
//       } else {
//         finalWord.push(word + " ");
//       }
//     }
//   });
//   let word = finalWord.join("");
//   return word;
// }

// console.log(spinWords("Welcome"));
// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"))
console.log(spinWords2("This sentence is a sentence"));

function spinWords2(string) {
  //TODO Have fun :)
  let sentence = string.split(" ");
  let finalSentence = [];

  sentence.forEach(function (word) {
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
      console.log(word);
    }
    finalSentence.push(word);
    console.log(finalSentence);
  });

  return finalSentence.join(" ");
}
