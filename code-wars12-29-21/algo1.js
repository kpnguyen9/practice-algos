// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

let arrInput1 = ["aabb", "abcd", "bbaa", "dada"];
let arrInput2 = ["crazer", "carer", "racar", "caers", "racer"];
let arrInput3 = ["lazing", "lazy", "lacer"];

//input word to array, sort array alphabetically, join
//assign an empty array to variable
//for loop that arranges each element into an alphabetical array and then join to string
//if the new string is the same as sorted input word, then add the element into the new empty array

function anagrams(word, words) {
  let sortedWord = word.split("").sort().join("");
  //   console.log(sortedWord);

  let newArr = [];

  for (let i = 0; i < words.length; i++) {
    let sortedEl = words[i].split("").sort().join("");

    if (sortedEl === sortedWord) {
      newArr.push(words[i]);
    }
  }
  console.log(newArr);
}

anagrams("abba", arrInput1);
anagrams("racer", arrInput2);
anagrams("laser", arrInput3);
