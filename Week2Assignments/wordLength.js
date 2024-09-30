//Given a string s consisting of words and spaces, return the length of the last word in the string.

let s="Hello World";
let word= s.substring(6);
let wordLength=word.length;
console.log(`The length of the last word ${word} is ${wordLength} `);

let newWord= " fly me to the moon ";
let word1= newWord.substring(newWord.length-5);
let word1Trim=word1.trimEnd();
let wordLength1=word1Trim.length;
console.log(`The length of the last word ${word1Trim} is ${wordLength1} `);

