//Functions

function showAlert(){
	alert("Hi");
	console.log("Alert screen");
}

//calling of function
showAlert();


//No var keyword in arguments of function
function showMsg(msg){
	alert(msg);
}

showMsg("this is a message");


//return values from functions
function sum(a, b){
	//console.log(a + b);
	return a + b;
}

var result = sum(10,829);
console.log(result);


/* This will call the function even with fewer arguments and the result 
   will be NaN as because it will take 4 as number and b as undefined.*/ 

var result_2 = sum (4);
//Output = NaN
console.log(result_2);


//more arguments  -- javascript will ignore the others arguements. 
var result_3 = sum(1, 2, 3);
console.log(result_3); //3


//Function Hoisting


/* variable hoisting */
function hoistDemo(){
	console.log(i);
	var i = 10;
}

hoistDemo();
//This is not and error this will result in undefined as bcs javscript interpretator see is as - 

hoistDemo(){
	var i;
	console.log(i);
	i=10;
}

//It move variable declaration is move up.

/*Function Hoisting*/

//Calling the function is done before declaraing it.
hoistDemo();

function hoistDemo(){
	var i =10;
	console.log(i);
}


//function and scope


//global scope
var name = "global";

//function or lexical scope

function scopeDemo(){
	var name = "function";
	console.log(name);
}

scopeDemo();
console.log(name);


//Execution context( environment)

function c(){
	console.log("Inside c");
}


function b(){
	c();
	console.log("Inside b");
}

function a(){
	b();
	console.log("Inside c");
}

a();
console.log("global context");


//function inside a function

var name = "global";

function outer() {
	var name = "outer";
	var outervar =10;
	
	function inner(){
		var name = "inner";
		console.log(name);
	}
	
	inner();
	console.log(name);
}

outer();
console.log(name);


//Function expression


//Assigning the return value of function in a variable.
var factorial = function fact(n){
	var ans = 1;

	for(var i =1;i<=n;i++){
		ans = ans *i;
	}

	return ans;
};


console.log(fact);  // its an error now.

console.log(factorial(5));
console.log(factorial);


//Anonymus function definition it will automatically take the variable name
var factorial2 = function fact(n){
	var ans = 1;

	for(var i =1;i<=n;i++){
		ans = ans *i;
	}

	return ans;
};


//Function declaration vs expression 


//Declaration will work in case Hoisting bcs it will move all variable and fucnction declaration at top. 
console.log(fact(5));

/*
This will not occur because here variable hoisting will take place not function 
(interpreator doesn't know that what variable is holding)

first time it will give error ans 2nd time it will give function definition.
*/
console.log(result(4));


function fact(n){

	var ans = 1;
	for(var i =1;i<=n;i++){
		ans = ans *i;
	}

	return ans;
}


var result = function fact(n){

	var ans = 1;
	for(var i =1;i<=n;i++){
		ans = ans *i;
	}

	return ans;
};


//Passing function as argument 

var factorial = function fact(n){

	var ans = 1;
	for(var i =1;i<=n;i++){
		ans = ans *i;
	}

	return ans;
};


//Calling function 
function ncr(n, r ,factorial){
	return factorial(n) / (factorial(r) * factorial(n-r));
}

console.log( ncr(5,2, factorial));




/*****ARRAY*****/

//Ways to declare the array
var arr = [1,2,3,4,5];
var arr = new Array(1,2,3,4,5);

console.log(arr[3]);

console.log(arr[6]); // No error it will show undefined. (not out of bound).

arr[4] = 70;

arr[7] = 100;

//Output will be 1,2,3,4,70,emptyx2,100;
console.log(arr);

//8
console.log(arr.length);


//Declaring size of array if you pass one argument.
var arr = new Array(2);



//Function on Array

//Array can be hetrogenous.*******

var arr = ["abc",2,true,4,6,"xyz"];

//***Array doesn't contain continously memory block in javascript.

var arr = [4,5,6,7,8];

//Insertion at the end of array.
arr.push(10);

//Deletion from the end of the array.
arr.pop();

//left shift of array 
arr.shift();

//right shift of array.
arr.unshift(2);


//Splice fucntion in array

//Take 3 arguements (start index, deletion count, element to be inserted)
var arr = [9,8,7,6,5];

//This will delete 1 element from position 2 onward.
arr.splice(2,1);


//This will delete all element from position 2 onward.
arr.splice(2);

//This will 1 element (5) from position 1 onward and i don't want to delete any element.
arr.splice(1,0,5);


//This will 3 element (8,90,76) from position 1 onward and i don't want to delete any element.
arr.splice(1,0,8,90,75);

//Parallel insertion and deletion (Delete element from position 2 and insert 40,50 after position 2);
arr.splice(2,2,40,50);



//Interate over array

var arr = [2,3,4,5,6,7,8];

for (var i =0; i<=arr.length; i++){
	console.log(arr[i]);
}

//For each element in array
arr.forEach( print);
//No argument passing to the function it will automatically pass each value one by one.

function print(element){
	console.log(element);
}
