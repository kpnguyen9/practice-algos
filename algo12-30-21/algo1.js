// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //create new empty array
  //split string to array of words
  //loop each array to splice first letter
  //if element is punctuation, push to array
  //else string to array of letters
  //push first letter to end
  //push "ay"
  //splice first letter
  //add words to new empty array
  //join to new sentence

  let newArr = [];
  let wordArr = str.split(" ");

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === "!" || wordArr[i] === "?") {
      newArr.push(wordArr[i]);
    } else {
      let letterArr = wordArr[i].split("");
      letterArr.push(letterArr[0] + "ay");
      letterArr.splice(0, 1);
      let newWord = letterArr.join("");
      newArr.push(newWord);
    }
  }

  let newSentence = newArr.join(" ");
  return newSentence;
}
