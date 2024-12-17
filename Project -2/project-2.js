// 1. Electricity Bill Calculation

let unitsConsumed = 200, totalBill, surcharge, finalAmount;

if (unitsConsumed <= 50) {
    totalBill = unitsConsumed * 1;
    console.log("The electricity bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 150) {
    totalBill = ((unitsConsumed - 50) * 2) + (50 * 1);
    console.log("The electricity bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 250) {
    totalBill = ((unitsConsumed - 150) * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The electricity bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The final amount to pay is:", finalAmount, "Rs");
}
else {
    totalBill = ((unitsConsumed - 250) * 4) + (100 * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The electricity bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The final amount to pay is:", finalAmount, "Rs");
}

// Output: The electricity bill is: 440 Rs, Surcharge: 80 Rs, The final amount to pay is: 480 Rs





// 2. Season Based on Month (Using Switch)

let monthNumber = prompt("Enter the month number (1-12):");
console.log("You entered month:", monthNumber);

switch (monthNumber) {
    case "1":
    case "2":
    case "3":
    case "4":
        console.log("Winter");
        break;
    case "5":
    case "6":
    case "7":
    case "8":
        console.log("Monsoon");
        break;
    case "9":
    case "10":
    case "11":
    case "12":
        console.log("Summer");
        break;

    default:
        console.log("Invalid season");
        break;
}

// output : if input 3 : winter






// 3. Interest Calculation Based on Years

let principalAmount = prompt("Enter the principal amount:");
let timeInYears = prompt("Enter the number of years:");
let interestRate, totalInterest;

if (timeInYears > 3 && timeInYears <= 5) {
    interestRate = 3;
}
else if (timeInYears > 5 && timeInYears <= 8) {
    interestRate = 5;
}
else if (timeInYears > 8 && timeInYears <= 12) {
    interestRate = 12;
}
else {
    interestRate = 15;
}

totalInterest = (principalAmount * interestRate * timeInYears) / 100;
console.log("The total interest is:", totalInterest, "Rs");

// output : principal = 10000 ; time : 6 : rate : 5% == 3000





// 4. Voting Eligibility Check

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
    console.log("You are eligible to vote.");
}
else if (userAge > 0 && userAge < 18) {
    console.log("You are not eligible to vote.");
}
else {
    console.log("Invalid input for age.");
}

// output : 18 : You are eligible to vote.





// 5. Classify Age Groups

let enteredAge = prompt("Enter your age:");

if (enteredAge >= 0 && enteredAge <= 12) {
    console.log("You are classified as a Child.");
}
else if (enteredAge > 12 && enteredAge <= 18) {
    console.log("You are classified as a Teenager.");
}
else if (enteredAge > 18 && enteredAge <= 60) {
    console.log("You are classified as an Adult.");
}
else if (enteredAge > 60) {
    console.log("You are classified as a Senior Citizen.");
}
else {
    console.log("Invalid age input.");
}

// output : 17 : You are classified as a Teenager.
