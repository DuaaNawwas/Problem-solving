// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.
console.log("----------app2.js// new questions 23/8/2022----------------");
console.log("----------Q1----------------");
let inventory = [
	{ name: "apples", available: true },
	{ name: "pears", available: true },
	{ name: "oranges", available: false },
	{ name: "bananas", available: true },
	{ name: "blueberries", available: false },
];
let newList = [];
function createList(arr) {
	arr.forEach((element) => {
		if (element.available) newList.push(element);
	});
	return newList;
}
console.log(createList(inventory));

// Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].

console.log("----------Q2----------------");
// let evenOddArray = [];
function evenOdd(arr) {
	return arr.map((ele) => {
		if (isNaN(ele)) {
			return "N/A";
		} else {
			return ele % 2 == 0 ? "even" : "odd";
		}
	});
}
// console.log([1, 2, 3, "a"].map(evenOdd));
console.log(evenOdd([1, 2, 3, "a"]));

// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].

console.log("----------Q3----------------");

function notInFirstArray(arr1, arr2) {
	return arr2.filter((ele) => {
		return !arr1.includes(ele);
	});
}

console.log(notInFirstArray([1, 2, 3, 5], [1, 2, 3, 4]));
console.log(notInFirstArray([4, 5, 1, 5], [1, 2, 3, 4]));

// Q4:reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.

console.log("----------Q4----------------");

function reversedString(str) {
	let strArr = str.split("");
	console.log(strArr);
	return strArr.reduce((acc, ele) => {
		return ele + acc;
	});
}
console.log(reversedString("hello"));

// Q5: regex
// Write a function named isNum that takes in a string or number of any length.
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false
console.log("----------Q5----------------");

function isNum(word) {
	let regex = /\d/g;
	return regex.test(word);
}
console.log(isNum(12345));
console.log(isNum("12345"));
console.log(isNum("h3llo world"));
console.log(isNum("hello world"));

// Q6:regex
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.
console.log("----------Q6----------------");

function matchMonth() {
	let answer = prompt(" In which month is Halloween?");
	let regex1 = /(^\s*oct\s*$|^\s*october\s*$)/i;
	console.log(regex1.test(answer));
}
matchMonth();

console.log("-----------old questions 16/8/2022 ------------");

// Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.
console.log("-----------Q1 fizzbuzz ------------");
let x = [4, 3, 5, 2, 6, 1, 9, 15];
console.log(x.length);
let output = [];
console.log("-using for loop -");
function fizzbuzz(x) {
	for (let i = 0; i < x.length; i++) {
		if (x[i] % 3 == 0) {
			output.push("Fizz");
			if (x[i] % 3 == 0 && x[i] % 5 == 0) {
				output.push("FizzBuzz");
			}
		} else if (x[i] % 5 == 0) {
			output.push("Buzz");
		} else {
			output.push(x[i]);
		}
	}
	return output;
}

console.log(fizzbuzz(x));

console.log("-using forEach -");
let output2 = [];
x.forEach((x) => {
	if (x % 3 == 0) {
		output2.push("Fizz");
		if (x % 3 == 0 && x % 5 == 0) {
			output2.push("FizzBuzz");
		}
	} else if (x % 5 == 0) {
		output2.push("Buzz");
	} else {
		output2.push(x);
	}
	return output2;
});

console.log(output2);

// Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

// For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.

console.log("-----------Q2 two to the ------------");

console.log("-using for loop -");
let result = [];
function forLoopTwoToThe(arr) {
	for (let i = 0; i < arr.length; i++) {
		result.push(2 ** arr[i]);
	}
	return result;
}
console.log(forLoopTwoToThe([1, 2, 3]));

console.log("-using map -");

// let arr = [1, 2, 3];
// let answer = arr.map((num) => 2 ** num);
// console.log(answer);

function toTheTwo1(arr) {
	return arr.map((num) => {
		return 2 ** num;
	});
}
console.log(toTheTwo1([1, 2, 3]));
// Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

console.log("-----------Q3 odd and even ------------");

console.log("-using for loop -");

let output1 = [];
function oddValues(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) {
			output.push(arr[i]);
		}
	}
	return output1;
}
console.log(oddValues([1, 2, 3, 4, 5]));

console.log("-using filter -");
function oddValues(arr) {
	return arr.filter((num) => num % 2 != 0);
}
console.log(oddValues([1, 2, 3, 4, 5, 6]));

// Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.
// Note: You may not use the array's built-in length property.
console.log("-----------Q4 count numbers ------------");

console.log("-using for loop -");
let count = 0;
function countNumberOfElements(arr) {
	for (let i = 0; i < arr.length; i++) {
		count++;
	}
	return count;
}
console.log(countNumberOfElements([1, 2, 3, 4, 5, 6]));

console.log("-using reduce -");
function countNumberOfElements(arr) {
	return arr.reduce((acc, num) => acc + 1, 0);
}
console.log(countNumberOfElements([1, 2, 3, 4, 5, 6]));
