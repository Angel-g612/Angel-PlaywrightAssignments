function isAnagram(string1 ,string2) {
    
   
    let str1 = string1.trim().toUpperCase().split('').sort().join();
    let str2 = string2.trim().toUpperCase().split('').sort().join();
  
    if (str1 === str2) {
        return "The string is an Anagram";
    }
    else 
    {
      return "The string is not an Anagram";
    }
}
// Example for  Anagram
console.log(isAnagram("listen","silent"));

// Example for not Anagram
console.log("******************example for not an anagram***************");

console.log(isAnagram("hello","silent"));


