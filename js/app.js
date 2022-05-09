// 1. Calculate the Area of a Triangle
// 2. Swap Two Variables
// 3. Convert Kilometres to Miles
// 4. Convert Celsius to Fahrenheit
// 5. Generate a Random Number & 4 Number OTP Generation Logic
// 6. Check if a number is Positive, Negative, or Zero
// 7. Check if a Number is Odd or Even
// 8. Find the Largest Among Three Numbers
// 9. Check Prime Number
// 10. Find the Factorial of a Number
// 11. Display the Multiplication Table
// 12. Print the Fibonacci Sequence
// 13. Check Armstrong Number
// 14. Make a Simple Calculator
// 15. Find the Sum of Natural Numbers
// 16. Find the Factors of a Number
// 17. Guess a Random Number
// 18. Check Whether a String is Palindrome or Not
// 19. Sort Words in Alphabetical Order
// 20. Replace Characters of a String
// 21. Reverse a String
// 22. Check the Number of Occurrences of a Character in the String
// 23. Convert the First Letter of a String into Uppercase
// 24. Count the Number of Vowels in a String
// 25. Check Whether a String Starts and Ends with Certain Characters
// 26. Replace All Occurrences of a String
// 27. Check if a String Starts with Another String
// 28. Check Whether a String Contains a Substring
// 29. Compare Two Strings
// 30. Replace All Line Breaks with < br >
// 31. Remove Specific Item from an Array
// 32. Empty an Array
// 33. Add Element to Start of an Array
// 34. Remove Duplicates from Array
// 35. Merge Two Arrays and Remove Duplicate Items
// 36. Compare Elements of Two Arrays
// 37. Split Array into Smaller Chunks
// 38. Check If a Variable Is undefined or null
// 39. Validate An Email Address

let selectCase = prompt("Enter the question number!");

switch (selectCase) {
  case "1":
    // 1. Calculate the Area of a Triangle

    // formula : Area = 1/2 base * height;
    // For Right-Angled Triangle

    var base = prompt("Please enter the base value");
    var height = prompt("Please enter the height value");
    var area = (base * height) / 2;
    console.log("Base: " + base + "height: " + height + "area: " + area);

    // For any Triangle
    // Using Heron's Formula -> if you know all the sides of the triangle, you can find the area using Heron's formula. If a,b, and c are the three
    // sides of a triangle, then
    // s = (a + b + c)/2
    // Area = sqt( s(s-a) * (s-b) * (s-c) )

    var a = 10;
    var b = 5;
    var c = 10;
    var s = (a + b + c) / 2;
    var temp = s * (s - a) * (s - b) * (s - c);
    var area2 = Math.sqrt(temp);
    console.log(area2);

    break;

  case "2":
    // 2. Swap Two Variables

    var first = 5;
    var second = 7;
    [first, second] = [second, first];
    console.log(first, second);
  //answer - 7 5

  case "3":
    // 3. Convert Kilometres to Miles

    function convert() {
      var kms = document.getElementById("data").value;
      const factor = 0.621371;
      var miles = kms * factor;
      document.getElementById("res").innerText = `${miles} Miles`;
    }

    break;
  case "4":
    // 4. Convert Celsius to Fahrenheit

    function convert1() {
      var c = document.getElementById("data1").value;
      var f = c * 1.8 + 32;
      document.getElementById("res2").innerText = `${c} C = ${f} F`;
    }

    break;

  case "5":
    // 5. Generate a Random Number
    // Math.random() returns a random number floating-point number ranging from 0 to less than 1.

    var x = Math.random();
    console.log("Before Calculation " + x);
    // for Numbers between 1-10.
    // using formula Math.random() * (highestNumber - lowestNumber) + lowestNumber
    x = x * (10 - 1) + 1;
    console.log(`Random Value between 1-10 is ${x}`);
    console.log("After Floor Calculation " + Math.floor(x));

    // 4 Number OTP Generation Logic
    var y = Math.random();
    y = y * 10000;
    // console.log(`The four number otp is ${Math.floor(y)}`);
    console.log("The Four Number otp is " + Math.floor(y));
    break;

  case "6":
    // 6. Check if a number is Positive, Negative, or Zero

    function check() {
      var value = document.getElementById("data3").value;
      // var res = Math.sign(value);
      if (value > 0) {
        res3 = `${value} is Positve Number`;
      } else if (value < 0) {
        res3 = `${value} is Negative Number`;
      } else if (value == 0) {
        res3 = `${value} is Zero`;
      } else {
        res3 = `${value} is Not A Number`;
      }
      document.getElementById("res3").innerText = res3;
    }
    break;
  case "7":
    // 7. Check if a Number is Odd or Even

    // Method 1 ->

    var num = 4;
    // if (num % 2 == 0) {
    //     //even
    //     console.log(`${x} is a even number`);
    // } else {
    //     // odd
    //     console.log(`${x} is an odd number`);
    // }

    // Method 2 ->

    var res4 = num % 2 == 0 ? "even" : "odd";
    console.log(`${num} is an ${res4} number`);
    break;

  case "8":
    // 8. Find the Largest Among Three Numbers

    // Math.max() returns the largest number among the provided numbers.
    // syntax : Math.max(n1, n2, n3);

    var a = prompt("Please enter the first number");
    var b = prompt("Please enter the second number");
    var c = prompt("Please enter the thrid number");
    var greater = Math.max(a, b, c);
    console.log(`${a}, ${b}, ${c}: Largest: ${greater}`);

    // Above Method Functionality ->

    // function greatest(p, q, r) {
    //     if(p>=q && p>=r) {
    //         return p;
    //     } else if(q>=p && q >= r) {
    //         return q;
    //     } else {
    //         return r;
    //     }
    // }

    break;

  case "9":
    // 9. Check Prime Number
    // A prime number is a positive number integer that is only divisible by 1 and itself.
    // For example 2, 3, 5, 7, 11 are the first few prime numbers.

    var number = prompt("Please enter a number");
    if (number == 1) {
      console.log(`${number} is neither prime nor composite number`);
    } else if (number < 1) {
      console.log(`${number} is not a prime number`);
    } else {
      //number 15
      for (var i = 2; i < number; i++) {
        // 15%2 = R:1
        // 15/2 = Q:7
        if (number % i == 0) {
          var res5 = `${number} is not a prime number`;
          break;
        } else {
          var res5 = `${number} is a prime number`;
        }
      }
      console.log(res5);
    }

    // Method 2 - >

    // prime number program
    // prime no. are those that are divisible by it's own or 1

    // var giveNum = prompt("Enter a number");

    // if (giveNum % 2 == 0) {

    //     console.log("it is not a prime number");

    // } else if (giveNum == 1) {

    //     console.log("it is neither a prime nor composite number");

    // } else if (giveNum == 15) {

    //     console.log("it is not a prime number");

    // } else {
    //     console.log("is a prime number ");
    // }

    break;

  case "10":
    // 10. Find the Factorial of a Number
    // The Factorial of a number is the product of all the numbers from 1 to that number.
    // For Example, Factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120;
    // The formula for the factorial of n:
    // (n!) = 1 * 2 * 3 * 4....n

    var number1 = prompt("Please enter a number");
    var fact = 1;
    if (number1 == 0) {
      console.log(`The Factorial of ${number1} is 1`);
    } else if (number1 < 0) {
      console.log(`The Factorial of -ive numbers is not possible`);
    } else {
      for (var i = 1; i <= number1; i++) {
        fact = fact * i;
      }
      console.log(`The Factorial of ${number1} is ${fact}`);
    }

    break;

  case "11":
    // 11. Display the Multiplication Table

    var table = 10;
    for (var i = 1; i <= 10; i++) {
      document.write(i + " x " + table + " = " + i * table + "<br>");
    }

    break;

  case "12":
    // 12. Print the Fibonacci Sequence

    // The fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum
    // of the previous two terms.
    // Series: 0, 1, 1, 2, 3, 5, 8, 13, 21,...

    var l = 0,
      m = 1;
    console.log(l);
    console.log(m);
    for (var i = 0; i <= 10; i++) {
      var temp2 = l + m;
      console.log(temp2);
      l = m;
      m = temp2;
    }

    break;

  case "13":
    // 13. Check Armstrong Number

    // abcd.... = an + bn + cn + dn + ....

    // In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
    // For example, 153 is an Armstrong number because
    // 153 = 1*1*1 + 5*5*5 + 3*3*3

    var number3 = prompt("Please enter a number");
    var temp3 = number3;
    var sum = 0;
    var noOfDigits = number3.toString().length;
    while (temp3 > 0) {
      var digit = temp3 % 10;
      sum += digit ** noOfDigits;
      temp3 = parseInt(temp3 / 10);
    }

    if (sum == number3) {
      console.log(`${number3} is an armstrong number`);
    } else {
      console.log(`${number3} is not an armstrong number`);
    }

    break;

  case "14":
    // 14. Make a Simple Calculator

    var num1 = prompt("Please enter 1st number");
    var num2 = prompt("Please enter 2nd number");
    var opr = prompt("Please select among +,-,x,/");

    switch (opr) {
      // if (opr == "+")
      case "+":
        var res6 = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${res6}`);
        break;
      // if (opr == "-")
      case "-":
        var res6 = parseFloat(num1) - parseFloat(num2);
        console.log(`${num1} - ${num2} = ${res6}`);
        break;
      // if (opr == "*")
      case "*":
        var res6 = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${res6}`);
        break;
      // if (opr == "/")
      case "/":
        var res6 = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${res6}`);
        break;
      default:
        console.log("Invalid Operator");
    }
    break;

  case "15":
    // 15. Find the Sum of Natural Numbers
    // program to display the sum of natural numbers
    // take input from the user

    const number4 = prompt("Enter a positive integer: ");
    let sum2 = 0;

    // looping from i = 1 to number
    // in each iteration, i is increased by 1

    for (let i = 1; i <= number4; i++) {
      sum2 += i;
    }
    console.log("The sum of natural numbers:", sum2);

    break;

  case "16":
    // 16. Find the Factors of a Number

    // What is factor ?
    // To be the factors of a Number, the factor number should exactyly divide the number(with 0 remainder).
    // For Example, The factor of 12 is 1, 2, 3, 4, 6 and 12.

    var number5 = prompt("Please enter a number");
    for (var i = 1; i <= number5; i++) {
      if (number5 % i == 0) {
        console.log(i);
      }
    }

    break;

  case "17":
    // 17. Guess a Random Number

    var userNumber = 10;
    var counter = 0;
    var maxTries = 5;
    var randomNumber = Math.floor(Math.random() * userNumber + 1);
    while (attempts != randomNumber) {
      var attempts = prompt("Please pick a number between 1 and " + userNumber);
      counter += 1;
      if (counter > maxTries) {
        document.write("You have no more tries left. Press F5 to play again");
        break;
      }
      if (attempts == randomNumber) {
        document.write("Congratss you guess the correct number");
        document.write(" the random number was " + randomNumber);
        document.write(
          " It took you " + counter + " attempts to guess the correct number"
        );
      }
    }
    break;

  case "18":
    // 18. Check Whether a String is Palindrome or Not

    var string = prompt("Please enter a string");
    var len = string.length;
    var msg = "It is a palindrome";

    for (var i = 0; i < len / 2; i++) {
      if (string[i] != string[len - 1 - i]) {
        msg = "It is not a Palindrome";
      }
    }
    console.log(`${string}: ${msg}`);
    break;

  case "19":
    // 19. Sort Words in Alphabetical Order

    var string1 = prompt("Please enter a string");
    var stringArray = string1.split("");
    stringArray.sort();
    console.log(string1);
    console.log(stringArray);
    console.log(stringArray.join(" "));
    break;

  case "20":
    // 20. Replace Characters of a String

    var string2 = "Mr. Red has a car and a red bike";
    console.log(string2);
    var reg1 = new RegExp("Red", "gi");
    var newString = string2.replace(reg1, "blue");
    console.log(newString);
    break;

  case "21":
    // 21. Reverse a String

    //Hello
    //olleH

    var string3 = prompt("Please enter a string");
    var strLen = string3.length;
    var revStr = "";
    for (var i = strLen - 1; i >= 0; i--) {
      revStr += string3[i];
    }
    console.log(`${string3} reverse is ${revStr}`);
    break;

  case "22":
    // 22. Check the Number of Occurrences of a Character in the String

    // Hello -> 1 -> 3
    var string4 = prompt("Please enter a string");
    var letter = prompt("Please enter a letter");
    let strLen1 = string4.length;
    // H 0
    // E 1
    // L 2
    // L 3
    // O 4
    var count = 0;
    for (var i = 0; i < strLen1; i++) {
      if (string4[i] == letter) {
        count++;
      }
    }
    console.log(`${string4} => ${letter} => ${count}`);
    break;

  case "23":
    // 23. Convert the First Letter of a String into Uppercase

    var string5 = prompt("Please enter a string");
    console.log(string5);
    var first = string5.charAt(0);
    console.log(first);
    console.log(first.toUpperCase());
    var rem = string5.slice(1);
    console.log(rem);
    var caps = first.toUpperCase() + rem;
    console.log(`Final ${caps}`);
    break;

  case "24":
    // 24. Count the Number of Vowels in a String

    var string6 = prompt("Please enter a string");
    const reg = /[aeiou]/gi;
    var chars = string6.match(reg);
    console.log(chars.join(","));
    console.log(chars.length);
    break;

  case "25":
    // 25. Check Whether a String Starts and Ends with Certain Characters

    var string7 = prompt("Please enter a string");
    console.log(string7);
    var testStart = string7.startsWith("W");
    var testEnd = string7.endsWith("e");
    if (testStart == true && testEnd == true) {
      console.log(`${string7} starts with W and ends with e`);
    } else if (testStart == true && testEnd == false) {
      console.log(`${string7} starts with 'W`);
    } else if (testStart == false && testEnd == true) {
      console.log(`${string7} and with e`);
    } else {
      console.log(`${string7} and with e`);
    }

    break;

  case "26":
    // 26. Replace All Occurrences of a String

    var myStr =
      "freedom is not worth having if it does not include the freedom to make mistakes.";
    var newStr = myStr.replace(/freedom/g, "liberty");

    // Printing the modified string
    document.write(newStr);
    break;
  case "27":
    // 27. Check if a String Starts with Another String

    var str = "Hello world, welcome to the universe.";
    var n = str.startsWith("Hello"); //true
    break;

  case "28":
    // 28. Check Whether a String Contains a Substring

    const string8 = "javascript";
    const substring = "script";

    console.log(string8.includes(substring)); //true
    break;

  case "29":
    // 29. Compare Two Strings

    const s1 = "learn";
    const s2 = "today";

    console.log(s1 === "learn"); // true
    console.log(s1 === s2); // false

    break;

  case "30":
    // 30. Replace All Line Breaks with < br >

    const string9 = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

    const result = string9.replace(/(\r\n|\r|\n)/g, "<br>");

    console.log(result);
    break;

  case "31":
    // 31. Remove Specific Item from an Array

    var colors = ["red", "blue", "car", "green"];
    var carIndex = colors.indexOf("car"); //get  "car" index
    //remove car from the colors arraya
    colors.splice(carIndex, 1); // colors = ["red","blue","green"]
    break;

  case "32":
    // 32. Empty an Array

    // Method 1:
    var colors = ["red", "blue", , null, undefined, , "green"];

    //remove null and undefined elements from colors
    var realColors = colors.splice(0, colors.length);
    console.log(colors);

    // Method 2:
    var colors = ["red", "blue", , null, undefined, , "green"];
    var colors = [];
    console.log(colors);
    break;

  case "33":
    // 33. Add Element to Start of an Array

    var colors = ["white", "blue"];
    colors.unshift("red");
    console.log(colors); //add red to beginning of colors
    // colors = ["red","white","blue"]F
    break;

  case "34":
    // 34. Remove Duplicates from Array

    const names = ["John", "Paul", "George", "Ringo", "John"];

    let unique = [...new Set(names)];
    console.log(unique); // 'John', 'Paul', 'George', 'Ringo'
    break;

  case "35":
    // 35. Merge Two Arrays and Remove Duplicate Items

    let array1 = ["a", "b", "c"];
    let array2 = ["c", "c", "d", "e"];
    let array3 = array1.concat(array2);
    array3 = [...new Set([...array1, ...array2])]; // O(n)
    console.log(array3);
    break;

  case "36":
    // 36. Compare Elements of Two Arrays

    let arr1 = [1, 4, 7, 4, 2, 3];
    let arr2 = [1, 2, 3, 4, 7, 18];

    const is_same =
      arr1.length == arr2.length &&
      arr1.every((currElem) => {
        if (arr2.indexOf(currElem) > -1) {
          return currElem == arr2[arr2.indexOf(currElem)];
        }
        return false;
      });
    console.log(is_same);
    break;

  case "37":
    // 37. Split Array into Smaller Chunks

    function splitArrayIntoChunksOfLen(arr, len) {
      var chunks = [],
        i = 0,
        n = arr.length;
      while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
      }
      return chunks;
    }
    var alphabet = ["a", "b", "c", "d", "e", "f"];
    var alphabetPairs = splitArrayIntoChunksOfLen(alphabet, 2); //split into chunks of two

    console.log(alphabetPairs);
    break;

  case "38":
    // 38. Check If a Variable Is undefined or null

    let myVar = null;

    if (typeof myVar === "undefined" || myVar === null) {
      console.log(typeof myVar);
    }

    break;

  case "39":
    // 39. Validate An Email Address

    function validateEmail(emailAdress) {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailAdress.match(regexEmail)) {
        return true;
      } else {
        return false;
      }
    }
    var emailAdress = "test@gmail.com";
    console.log(validateEmail(emailAdress));
    break;

  default:
    prompt("Enter a valid case !");
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
