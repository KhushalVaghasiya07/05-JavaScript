// 1 Write a simple JavaScript program to print expected Output using the following

// array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange


// let random = ["Red", "Green", "White", "Black"];
// console.log(random.join(" , "));
// console.log(random.join(" + "));
// console.log(random.slice(0, 3).join(",  "));
// console.log(random.slice(0, 1).join("")); 
// console.log(random.slice(2, 4).join(" , ")); 
// console.log(random.slice().join(" , ") + " , Orange");



// ==========================================================================================================================




// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

// let numbers = [20,95,54,32,28,5,20,56,85,95,14,52,25];

// let length = numbers.length;

// let sum=0 , i;

// Using for loop

// for(i=0;i<length;i++)
// {
//     sum += numbers[i];
// }

// console.log("Using for loop Sum of these numbers is : ",sum);

// output : Using for loop Sum of this numbers is : 581

// ============================================

//Using foreach loop

// sum = 0;

// numbers.forEach(number => {
//   sum += number;
// });

// console.log("Using foreach method Sum of these numbers is : ", sum);

// output : Using foreach method Sum of these numbers is : 581



// ==========================================================================================================================


// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

// let num = [21,56,23,21,85,95,87,65,2,3];
// let max = num[0]; 

// for (let i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]; 
//     }
// }

// console.log("The maximum value in the array is:", max);

// // output : The maximum value is the array is : 95

// ============================================

// let min = num[0]; 

// for (let i = 1; i < num.length; i++) {
//     if (num[i] < min) {
//         min = num[i]; 
//     }
// }

// console.log("The minimum value in the array is:", min);

// output : The minimum value is the array is : 2


// ==========================================================================================================================



// 4.Write a JavaScript program to convert all array elements into ASCII values.

// let array = ["a","g","h","$"];

// for (let i = 0; i < array.length; i++) {
//   console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
// }

// ASCII value of a is 97
// ASCII value of g is 103
// ASCII value of h is 104
// ASCII value of $ is 36



// ==========================================================================================================================





// 5.Write a JavaScript program to remove negative values using the filter array function.


// let numbers = [-23,45,-98,23,23,54,89,24,-98,-47];

// let positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// output: [45, 23, 23, 54, 89, 24]




// ==========================================================================================================================




// 6. Write a JavaScript program using array map() method and return the square of the array element.
// array = [2, 5, 6, 3, 8, 9];

// let array = [1,2,3,4,5,6,7,8,9];

// let squareArray = array.map((number) => number * number);

// console.log(squareArray);

// output: [1, 4, 9, 16, 25, 36, 49, 64, 81]



// ==========================================================================================================================




// 7.Write a JavaScript program for sorting an array in ascending descending.
// numbers = 12,5, o, 1, 5, 12, 19, 20];
// myColor = ["Red", "Green", "White", "Black"];



// let numbers = [12,43,45,65,67,87,78,45,23,3,7,4];
// let myColor = ["Red", "Green", "White", "Black","Orange","Pink","Blue"];

// let ascendingNumbers = numbers.sort((a, b) => a - b);
// console.log(ascendingNumbers);

// let descendingNumbers = numbers.sort((a, b) => b - a);
// console.log(descendingNumbers);

// let ascendingColor = myColor.sort();
// console.log(ascendingColor);

// let descendingColor = myColor.sort().reverse();
// console.log(descendingColor);

// output: [3, 4, 7, 12, 23, 43, 45, 45, 65, 67, 78, 87]
// output: [87, 78, 67, 65, 45, 45, 43, 23, 12, 7, 4, 3]

// output: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Red', 'White']
// output: ['White', 'Red', 'Pink', 'Orange', 'Green', 'Blue', 'Black']



// ==========================================================================================================================





// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


// let filterWords = words.filter((word) => word.length >= 8);
// console.log(filterWords);

// output: ['Javascript']

// ==========================================================================================================================





// 9. write a JavaScript program to print expected output for the following string.
// x = "airplane"; output:- r
// x = "oxoxoxox"; output:- "oXoXoXoX"
// x = "A New Java Book";
// output:- "a new java book" , "A NEW JAVA BOOK"

// let x = "oxoxoxox";
// let output = x.replace(/x/g, "X");
// console.log(output);

// let x = "A New Java Book";
// let output = x.toUpperCase().split(" ").join(" ");
// console.log(output);

// output: x = "oXoXoXoX"
// output: "A NEW JAVA BOOK"




// ==========================================================================================================================





// 10. write a JavaScript program for array reverse.

// let array = [1, 2, 3, 4, 5];

// let reverseArray = array.reverse();
// console.log(reverseArray);


// output: [5, 4, 3, 2, 1]




// ==========================================================================================================================




// 11. write a JavaScript program to check if a value is found or not?

// let array = [1, 2, 3, 4, 5 ,6]; 

// let checkValue = array.includes(6);
// console.log(checkValue);

// output: true



// ==========================================================================================================================


// 12. write a JavaScript program to print your name and write the number of total characters.


// let name = "khushal vaghasiya";

// let totalCharacter = name.length;
// console.log(totalCharacter);

// output: 17




// ==========================================================================================================================




// 13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"



// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";


// let output = input.replace(/dog/g, "cat");
// console.log(output);


// output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"




// ==========================================================================================================================




// 14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"]


// let input = "Hire the top 1% freelance developers";

// let output = input.split(" ");
// console.log(output);

// output: ["Hire", "the", "top", "1%", "freelance", "developers"]



// ==========================================================================================================================




// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

// let input = ['5', 32, 'Daniel','khushal'];

// let output = input.toString();
// console.log(output);

// output: 5,32,Daniel,khushal
