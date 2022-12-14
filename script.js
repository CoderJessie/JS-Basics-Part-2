//Activating Strict Mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;

// //FUNCTIONS
function logger() {
	console.log('My name is Jessica');
}

//calling / running / invoking the function refers to when a function is being reused.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const ju'ce = 'Juice with ${apples} apples and ${oranges} 
	console.log(jonas['last' + nameKey]);oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//FUNCTION DECLARATIONS VS EXPRESSIONS
// Function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//ARROW FUNCTIONS
//Function Expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

//Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//for instance lets calculate the number of years a person has left until retirement.
const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jessica'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor(2, 3));

///REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired `);
		return -1;
	}
};
console.log(yearsUntilRetirement(1991, 'Jessica'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////
//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Examples: "Koalas wins (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5.Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

HINT: To calculate average of 3 values, add them all together and divide by 3.
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores.

GOOD LUCK

//SOLUTION
const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test Data 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
// 	if (avgDolphins >= 2 * avgKoalas) {
// 		return `Team Dolphins wins ${avgDolphins} vs. ${avgKoalas}`;
// 	} else if (avgKoalas >= 2 * avgKoalas) {
// 		return `Team Koalas wins ${avgDolphins} vs. ${avgKoalas}`;
// 	} else {
// 		return `There is no winner`;
// 	}
// };
// console.log(checkWinner(scoreDolphins, scoreKoalas));

//Test Data 2
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		return `Team Dolphins wins ${avgDolphins} vs. ${avgKoalas}`;
	} else if (avgKoalas >= 2 * avgDolphins) {
		return `Team Koalas wins ${avgKoalas} vs. ${avgDolphins}`;
	} else {
		return `There is no winner`;
	}
};
console.log(checkWinner(scoreDolphins, scoreKoalas));
//OR
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));

///How to call a function
const fullName = function (firstName) {
	return `My name is ${firstName}`;
};
const formalName = function (firstName) {
	const newName = fullName(firstName);
	return `My name is ${firstName}`;
};
console.log(formalName('Jonas'));

///How to call a random number
const randGame = function (bringNo) {
	let rand = Math.floor(Math.random()* 10) +1 ;
	console.log(`Your number is ${bringNo}`);
	console.log(`Random value is ${rand}`);
	if (bringNo != rand) {
		console.log(`Sarah is a fool`);
	} else if (bringNo === rand) {
		console.log(`Victor is wise`);
	} else {
		console.log(`Incomplete information`);
	}
};

randGame(1);

////ARRAYS
//Instead of storing more than one variables like this
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';
//use an array to store them like this:
const friends = ['Micheal', 'Steven', 'Peter'];//basic way of calling an array called 'a literal syntax'.
console.log(friends);
// const years = new Array(1991, 1984, 2008, 2020);//we called the array function here using 'new Array'(we use new so that the function can run without the new keyword it wouldnt run)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);//used to get the number of elements in an Array.
console.log(friends[friends.length - 1]);//used to get the last element of any Array.
////TO ADD AN ELEMENT TO THE ARRAY
friends[2] = 'Jay';//Arrays can be changed that is why we can reuse friends here despite using 'const' to declare the variable earlier.
console.log(friends);
// friends = ['Bob', 'Alice']; //We cant reassign variables to an array like this because it is illegal.
const firstName = 'Jessica';
const jessica = [firstName, 'Walter', 2037 - 1991, 'Student', friends];
console.log(jessica);
console.log(jessica.length);

//EXERCISE
const calcAge = function(birthYear){
	return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

//To calculate the calcAge do not do this:
// console.log(calcAge(years)); //this wont work because the whole array is being substituted for birthYear in the function.
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

////BASIC ARRAY METHODS
//Add elements
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //.push adds element to the end of an array.
console.log(friends);
console.log(newLength);

friends.unshift('John'); //.unshift adds element to the beginning of an array.
console.log(friends);

//Remove elements
const popped = friends.pop(); //.pop removes the last element of an array.
console.log(popped);
console.log(friends);

const shifted = friends.shift(); //.shift removes the first element of an array.
console.log(shifted);
console.log(friends);

//.indexOf checks the position of a certain element in an array.
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//.includes checks if an element is contained in an array
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

//The 'includes method' can be used to write conditionals
if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}
*/
//////////////////////////////////////////
//  Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of the function! So you can just call a function as array values (so don't store the tip values in seperate variables first, but right in the new array)

TEST DATA: 125, 555 and 44

GOOD LUCK

//////SOLUTION TO CREATING A DATABASE
///If you want to create a database do this:
const dailyRecord = []; //If this line of code is inside the function then it should return each tip singly, but if outside as it is the function would add every tip it run to the array.

function calcTip(bill) {
	const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	dailyRecord.push(tip);
	console.log(dailyRecord);
	return console.log(tip);
}
calcTip(125);
calcTip(100);
calcTip(20);
calcTip(2356);

//////////SOLUTION TO CODING CHALLENGE #2
const tips = [];
const total = [];

function calcTip(bill) {
	const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	const sum = bill + tip;
	total.push(sum);
	tips.push(tip);
	return console.log(tip);
}
calcTip(125);
calcTip(555);
calcTip(44);

const bills = [125, 555, 44];
console.log(bills);
console.log(tips);
console.log(total);

////////////SOLUTION 2/////////////
const calcTip = function(bill){
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//////OBJECTS
const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Micheal', 'Peter', 'Steven'],
]; //This is a data structure containing all types of element belonging to the jonas entity.

const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Micheal', 'Peter', 'Steven'],
}; //This is the easiest way of creating an object it is called 'object literal syntax'.

///DOT VS. BRACKET NOTATION
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Micheal', 'Peter', 'Steven'],
}; 
console.log(jonas); 

console.log(jonas.lastName); //dot notation
console.log(jonas['lastName']); //bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); This doesnt work for dot notation.

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

//Little exercise on retrieving an element from an object
if(jonas[interestedIn]){
	console.log(jonas[interestedIn]); 
}else{
	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
} 

///HOW TO ADD NEW ELEMENTS USING DOT AND BRACKETS NOTATION
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas); 

//Challenge
//"Jonas has three friends, and his best friend is called Micheal"  What you need to get is 'jonas', 'three', and 'Micheal'.

//SOLUTION
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

///OBJECT METHODS
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Micheal', 'Peter', 'Steven'],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {    //calcAge is a method
	// 	return 2037 - birthYear;
	// },

	// calcAge: function(){
	// 	// console.log(this); //'this keyword points to the object 'jonas'
	// 	return 2037 - this.birthYear;
	// }

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.age}-year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
	},
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/
////////////////////////////////////
///Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMI's! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and 1.95 m tall.

GOOD LUCK

////SOLUTION
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
	getSummary: function () {
		return `${this.fullName}'s BMI ${this.BMI} is ${
			this.BMI > john.BMI ? 'higher' : 'not higher'
		} than ${john.fullName}'s BMI ${john.BMI}!`;
	},
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
	getSummary: function () {
		return `${this.fullName}'s BMI ${this.BMI} is ${
			this.BMI > mark.BMI ? 'higher' : 'not higher'
		} than ${mark.fullName}'s ${mark.BMI}!`;
	},
};
console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.getSummary());
console.log(john.getSummary());

/////LOOPS
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

//'for' loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

///THE 'FOR' LOOP
const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Micheal', 'Peter', 'Steven'],
	true,
];
const types = [];
//Assuming we want to log the elements of the array individually
for (let i = 0; i < jonas.length; i++) {
	//Reading from jonas array
	console.log(jonas[i], typeof jonas[i]);

	//Filling the types array
	// types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
} //looping arrays with 'for' loop

console.log(types);

///Application of the 'for' loop
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]); //.push because we are adding the result to the ages array.
}
console.log(ages);

//IMPORTANT STATEMENT FOR LOOPS('CONTINUE' AND 'BREAK')
console.log('---ONLY STRINGS---');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== 'string') continue; //'continue' statement

	console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] === 'number') break; //break statement

	console.log(jonas[i], typeof jonas[i]);
}

//LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Micheal', 'Peter', 'Steven'],
	true,
];

//0, 1, ..., 4 ==> looping forward
//4, 3, ..., 0 ==> looping backward
for (let i = jonas.length - 1; i >= 0; i--) {
	console.log(jonas[i]);
}
///loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`------Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Lifting weight repetition ${rep}`);
	}
}

////THE 'WHILE' LOOP
let rep = 1;
while (rep <= 10) {
	// console.log(`WHILE: Lifting weights repetition ${rep}`);
	rep++;
}
//Rolling a dice to get a six
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log(`Loop is about to end...`);
	}
}
*/
/////////////////////////////////////////////
// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' functions we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
	4.1. First, you will need to add up the values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
	4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
	4.3. Call the function with the 'totals' array

GOODLUCK
*/
/////SOLUTION
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

////BONUS SOUTION
const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		// sum = sum + arr[i];
		sum += arr[i];
	}
	console.log(sum);
	return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

