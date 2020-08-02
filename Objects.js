//Objects 

//Non primitive type value
var student = {};

typeof(student); //output-object

student = { name:"abc",rollNo: 135,marks:90};

console.log(student.name);

//changing the value of object property
student.marks = 100;

console.log(student.sem);  //undefined (no error).

//adding a new property to object
student.sem = 4;

//another way of declaration
var obj = new Object();


console.log(student["marks"]); 
// another way of accessing the property. use this notation to access the property which are numbers.

//name property of object is not valid.
var student = {"-name":"Vikrant","marks":90,"sem":8};



//For Dynamic property notation use square bracket notation.
function printProperty (obj, prop){
	console.log(obj[prop]);
}

var prop = "marks";
printProperty(student, prop);


//Deleting property
delete student.marks; 


//How are object are stored in javascript.

var obj = {
	"p1" :10
};

//This statement doesn't create another object it just declare varibale which is refering to same location.
var obj2 = obj;



//Iterating over objects

/*FORIN LOOP*/
for(var prop in student){
	console.log(prop, student[prop]);
}

// Another way
var keys = Object.keys(student);
var keys = Object.getOwnPropertyNames(student);



//Nested Objects

var student = {
	name: "Abhishek",
	marks: 90,
	rollno : 100,
	address : {
		place : "Meerut",
		state: "uttar Pradesh",
		pincode: 411043
	}
};

console.log(student); // output - address{}
console.log(student.address["state"]); //To access address property.




/* Arrays and objects*/

//array does not have continous memory allocation

var arr = [10,20,30,40,50];
 
//This is a key value pair object bascially.

0 : 10
1 : 20
2 : 30
3 : 40
4 : 50 


var obj = {
	"0": 10,
	"1": 20,
	"2": 30,
	"3": 40,
	"4": 50
};

//This obj and the above arr is same.

arr[6] = 100;

arr["6"] = 100; //This is also valid statement.

//Then a key with name "6" is allocated with the value 100.





/*Interating array for in loop*/

//The length is figure out last number index + 1.

var arr = [10,20,30];
arr.prop1 = "demo";

new arr will be like  = [10,20,30,"demo"]; //But the length will be 3 only 


//To print all the property of array.
for(var i in arr){
	console.log(i);
}

//To print all the property and value of array elements.
for(var i in arr){
	console.log(i, arr[i]);
}



///Timing Interval

function sayhello(){
	alert("Hello World!!");
}

//pass the function and time after the function to be called(once).
setTimeout(sayhello , 2000); //Time will be in milli-second


//to repeat the task after certain interval of time.

setInterval(sayhello, 1000);

//to clear interval

var  id = setInterval(sayhello,1000); 

if(condition){
		
	clearInterval(id); //need the instance(setInterval for example) that you need to stop.	
}



