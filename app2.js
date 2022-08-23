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
console.log("----------app2.js----------------");
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
