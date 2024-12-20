// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop.

// let n = prompt("Enter Any number = ");
// let i = 1; 

// while (i <= 10) {
//     console.log(n + " x " + i + " = " + (n * i)); 
//     i++; 
// }

// output :-(Enter 5 :- );
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 =50



/* ========================================================================================================================*/



// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.

// let n = prompt("Enter Any number = ");
// let fact = 1;

// while(n >= 1)
// {
//     fact = fact * n;
//     n--;
// }
// console.log("Your Factorial is",fact);

// output :- (if you Enter 5 fact is :- 120);



/* ========================================================================================================================*/



// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do
// while loop.

// let num = 169, sum = 0, tempNum;

// do {
//   tempNum = num;
//   sum = 0;

//   while (tempNum > 0) {
//     let digit = tempNum % 10;
//     sum += digit ** 3;
//     tempNum = Math.floor(tempNum / 10);
//   }

//   if (sum == num) {
//     console.log(num + " is an Armstrong number");
//   } else {
//     console.log(num + " is not an Armstrong number");
//   }

//   num++;
// } while (num <= 1000);

// output :- 169 is an armstrong number



/* ========================================================================================================================*/



// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.

// let num = 121, reversed = 0, original;

// original = num;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (reversed == original) {
//     console.log(original + " is a Palindrome number");
// } else {
//     console.log(original + " is not a Palindrome number");
// }




/* ========================================================================================================================*/




// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while/
// loop.

// let a=1,b=1,c;
// console.log(a);
// console.log(b);

// for(let i=1;i<=10; i++)
// {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }

// output : 1 1 2 3 5 8 13 21 34 55 89


/* ========================================================================================================================*/


// 6. Write a JAVASCRIPT Program to add all the integers between O and 30 and display the total using do while loop.

// let sum = 0,i;

// for(i=1;i<=30;i++)
// {
//     sum = sum + i;
// }
// console.log("Your 0 to 30 sum is :",sum);

// output : Your 0 to 30 sum is : 465


/* ========================================================================================================================*/


// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.


// let number = 1;

// do {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (number % 3 === 0) {
//         console.log("Fizz");
//     } else if (number % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(number);
//     }
//     number++;
// } while (number <= 100);

// output : 
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
// 74
// FizzBuzz
// 76
// 77
// Fizz
// 79
// Buzz
// Fizz
// 82
// 83
// Fizz
// Buzz
// 86
// Fizz
// 88
// 89
// FizzBuzz
// 91
// 92
// Fizz
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz


/* ========================================================================================================================*/

// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.


// let sum = 0;
// let result = "";

// for (let i = 1; i <= 10; i++) {
//     sum += i * i;
//     result += (i * i) + (i < 10 ? "+" : ""); // Add "+" after each number except the last
// }

// console.log(result + " = " + sum);

// output : 1+4+9+16+25+36+49+64+81+100 = 385


/* ========================================================================================================================*/



// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

// let i,j;

// for ( i = 5; i >= 1; i--) {
//     let result = "";
//     for ( j = 5; j >= i; j--) {
//         result += j + " ";
//     }
//     console.log(result);
// }

// output :-
// 5
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1



/* ========================================================================================================================*/



// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

// let num = 1;

// for (let i = 1; i <= 5; i++) { 
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//         result += num + " ";
//         num++; 
//     }
//     console.log(result); 
// }

// output : 
// // 1
// // 2 3 
// // 4 5 6
// // 7 8 9 10
// // 11 12 13 14 15 