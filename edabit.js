// 1=======================================
// Return the First Element in an Array

// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
	for(let i=0; i<arr.length; i++){
		return arr[0];
	}
}
console.log(getFirstValue([23,45,56,78,90]))

// 2=====================================//==============

// Buggy Code (Part 1)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// cubes(3) ➞ 27

// cubes(5) ➞ 125

// cubes(10) ➞ 1000


function cubes(a) {
	return a ** 3
}
console.log(cubes(5));

function cubes(a) {
	return Math.pow(a,3);
}

// 3)===========================================================
// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function addition(a, b) {
	return a+b;
}
console.log(addition(12,4));
// 4)=============================================================
// How Edabit Works
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

function hello() {

}
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// Notes
// The returned string must be in all lowercase letters.

function hello() {
	return "hello edabit.com";
}
console.log(hello())

// other way
// const hello = () => "hello edabit.com";

// 5)==============================================================
// Power Calculator
// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
	return voltage*current;
}
console.log(circuitPower(130,10))

// other way
// const circuitPower=(voltage, current)=>voltage*current


// 6)==============================================================
// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

const convert = (a) => a*60;

// 7)============================================================
// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.


const findPerimeter = (length,width) => (length*2) + (width*2);

function findPerimeters(length,width){
	return (length + width) * 2;
}

// 8)===============================================================
// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2

const triArea = (base,height) => (base*height) / 2

// other way
// 9)==============================================================
// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

const addition = (number) => number + 1;


// 10)=============================================================
// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
	for(let i=0; i<arr.length; i++){
		return arr[0];
	}
}
console.log(getFirstValue([23,34,45]))

// other way

// function getFirstValue(arr) {
// 	return arr.shift();
// }

// var getFirstValue = arr => Array.isArray(arr) ? arr[0] : "error";

// 11)===============================================================

// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"


function giveMeSomething(a) {
	return 'something'+' '+a
}
console.log(giveMeSomething("cooking"))

// oher way

 return `something ${a}`;
 
 
 const giveMeSomething = a => "something " + a
 
 
// 12)==============================================================
 
//  Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

const howManySeconds = (a) => a*60*60

let howManySecondss = h => h * 3600;

// 13)=============================================================

// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720

// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function sumPolygon(n) {
	return (n-2)*180
}

// 14)=============================================================
// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.

const nextEdge =  (side1,side2) => ( side1 + side2 ) - 1


// otherway
function nextEdge(side1, side2) {
	if(side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	}else {
		return;
	}
}
//today may 18 2023
// // 15)==============================================================
// // Basic Variable Assignment
// // A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

// 16)===================================================================
// Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000

// 17)===============================================================
// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num) {
	if(num <= 0){
		return true
	}	
	else{
		return false
	}
}

function squared(a) {
	return a * a
}

// 18==================================================

// Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"
	var b = "Edabit"
	var result = name + b
  	return result


// otherway
const nameString = name => `${name}Edabit`;

// 19==========================================================
// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

function points(twoPointers, threePointers) {
	return (twoPointers*2)+(threePointers*3)
}
