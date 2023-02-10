import { FizzBuzz } from "./src/fizzBuzz.js";
import { Palindrome } from "./src/palindrome.js";
console.log("Fungsi FizzBuzz");
console.log("---------------");
FizzBuzz();
console.log("");
console.log("---------------");
console.log("");
console.log("Fungsi Palindrome");
console.log("---------------");
const inputPalindrom = [
    "Katak",
    "Kasur ini rusak",
    "Yang ini Bukan Palindrome",
    "Radar",
];
inputPalindrom.forEach((element) => {
    console.log("input", element);
    const hasil = Palindrome(element);
    console.log("input", element, "adalah", hasil);
    console.log("");
});
