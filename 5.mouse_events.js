var outerDiv = document.getElementById('outer');

//click on box -- then mouse over
outerDiv.addEventListener('mouseover', function(){
	console.log('Mouse Over');
});


//click outside the box -- mouse out
outerDiv.addEventListener('mouseout', function(){
	console.log('Mouse Out');
});


var searchInput = document.getElementById('search');

//Key pressed on keyboard
searchInput.addEventListener('keypress', function(){
	console.log('Key is pressed');
}) ;


//key pressed on entire event
document.addEventListener('keypress',function(){
console.log('Key pressed');
});
//special keypress will not work. - backspace, shift ,arrow keys


//For special keys
document.addEventListener('keydown',function(){
console.log('Key pressed');
});

//to know which key is pressed -- ASCII values
document.addEventListener('keydown',function(){
console.log('Key pressed', event.keyCode);
});

//Rotation of the mouse
document.addEventListener('deltaY',function(){
console.log('Mouse rotated');
});


//fucntion(event) -- this  will not affect the parent,grandparent part
var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(event){
	console.log('Click inner div');
	event.stopPropagation();
});

outerDiv.addEventListener('click', function(){
	console.log('Click in outer div');
});


//Strict Mode
//Prefer to get a an error when you cannot specified some things.

"use strict"; 
// way of using strict mode -- on top of the page for complete document or could be applied on particular function.





