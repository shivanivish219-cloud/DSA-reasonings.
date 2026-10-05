// question 01
// hello mam , my name is Ankit & Madam i'm new here & bob referred me here I belongs to tt family

const input =
  "hello mam , my name is Ankit & Madam i'm new here & bob referred me here I belongs to tt familly";

const output = input.split(" ");
// .join("")

let shortPalindrome = "";

for (const element of output) {
  const reverse = element.split("").reverse().join("");
  if (element.length >= 2 && element === reverse) {
    if (shortPalindrome === "" || element.length < shortPalindrome.length)
      shortPalindrome = element;
  }
}

// input.join(" ")

console.log(shortPalindrome);

// if(input === palindorme){
//     console.log("palindrome")
// }else{
//     console.log("not palindorme")
// }
