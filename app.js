// ------------------Q1---------------------------------
console.log(-9 * 3); //   -27
console.log("value is " + 50); // value is 50
console.log(17 % 5); // 2 remainder
console.log(4.5 % 17); // 4.5
console.log(5 / 10); // 0.5
console.log(4 == 4); // true
console.log(4 != 5); // true
console.log(7 <= 8); // true

let x = 5.2;
console.log(Math.ceil(x) - Math.floor(x)); // 6 - 5 = 1

let y = -5.2;
console.log(Math.ceil(y) - Math.floor(y)); // -5 - -6 = 1

// -------------------Q2---------------------------------
let number = prompt("Enter a number:");
alert("You chose the number " + number);

// -------------------Q3----------------------------------
let num1 = prompt("Enter a number:");
let num2 = prompt("Enter a second number:");
const nums = [num1, num2];
alert(
	"Your numbers in ascending order " +
		nums.sort(function (a, b) {
			// compare function, in descending b - a
			return a - b;
		})
);

// -------------------Q4-------------------------------------
let numOne = prompt("Enter a number:");
let numTwo = prompt("Enter a second number:");
const numbers = [numOne, numTwo];
numbers.sort(function (a, b) {
	return b - a;
});
let highest = numbers[0];
alert("The highest number is: " + highest);

// -------------------Q5-------------------------------------
let firstNum = prompt("Enter a number:"); // takes values as strings
let secondNum = prompt("Enter a second number:");
let sum = +firstNum + +secondNum; // must convert to num
alert("The sum of your numbers is: " + sum);

// -------------------Q6-------------------------------------
let num = prompt("Enter a number from 1 to 9");
while (num <= 0 || num > 9) {
	alert("PLEASE TRY AGAIN");
	num = prompt("Enter a number from 1 to 9");
}
switch (+num) {
	case 1:
		alert("ONE");
		break;
	case 2:
		alert("TWO");
		break;
	case 3:
		alert("THREE");
		break;
	case 4:
		alert("FOUR");
		break;
	case 5:
		alert("FIVE");
		break;
	case 6:
		alert("SIX");
		break;
	case 7:
		alert("SEVEN");
		break;
	case 8:
		alert("EIGHT");
		break;
	case 9:
		alert("NINE");
		break;
}
// -------------------Q7-------------------------------------
for (let i = 0; i <= 5; i++) {
	alert(i);
}

// -------------------Q8-------------------------------------
const list = [];
for (let i = 0; i <= 5; i++) {
	list.push(i);
}
alert(list); // we can concatenate them as well

// -------------------Q9-------------------------------------
let numList = "";
for (let i = 0; i <= 20; i++) {
	if (i % 3 == 0 && i != 0) {
		numList += i + " ,";
	}
}
alert(numList);

// -------------------Q10-------------------------------------
let hundredNum = prompt("Enter a number between 0 and 100:");
while (hundredNum < 0 || hundredNum > 100) {
	alert("ERROR: This number is out of range");
	hundredNum = prompt("Enter a number between 0 and 100:");
}
alert("You chose " + hundredNum);

// -------------------Q11-------------------------------------
let hundredNumV2 = prompt("Enter a number between 0 and 100:");
while (hundredNumV2 < 0 || hundredNumV2 > 100 || isNaN(hundredNumV2)) {
	alert("ERROR: You must enter a number between 0 and 100");
	hundredNumV2 = prompt("Enter a number between 0 and 100:");
}
alert("You chose " + hundredNumV2);

// -------------------Q12-------------------------------------
let sumNum = prompt("Enter a number:");
while (isNaN(sumNum)) {
	alert("This is not a number");
	sumNum = prompt("Enter a number:");
}
let total = 0;
for (let i = 0; i <= +sumNum; i++) {
	total += i;
}
alert("The sum from zero to " + sumNum + " is " + total);

// -------------------Q13-------------------------------------
let aveNum = prompt("Enter a number:");
while (isNaN(aveNum)) {
	alert("This is not  a number");
	aveNum = prompt("Enter a number:");
}
let totalNum = 0;
let ave;
for (let i = 0; i <= parseInt(aveNum); i++) {
	totalNum += i;
}
ave = totalNum / (parseInt(aveNum) + 1);
alert("The average is " + ave);
