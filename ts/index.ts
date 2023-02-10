
import {FizzBuzz} from './src/fizzBuzz.js';
import {Palindrome} from './src/palindrome.js';

console.log("Fungsi FizzBuzz");
console.log("---------------");

FizzBuzz();

console.log("");
console.log("---------------");
console.log("");

console.log("Fungsi Palindrome");
console.log("---------------");

const inputPalindrom = "abab";
console.log("input", inputPalindrom);
const hasil = Palindrome(inputPalindrom);
console.log("input", inputPalindrom, "adalah", hasil);
