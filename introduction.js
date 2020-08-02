// not bound to specific type
var a = 10;
// Variable can have multiple values at different point of time.
a ="Hello";
a = true;

//Adding a semicolon is optional



Their are 6 primitive data values - 

/*
1. number
2. string
3. Boolean
4. null
5. undefined
6. symbol

*/

non-primitve type = object.

Null and Undefiend

/*

Declaration and Defination - 

declaration - 
var a;
a =10;

definitation - 
var a = 10;

If value of any variable is not defined then then jaascript treat it as undefined.
where as you can set the value of variable as null(it is itself a value); 


*/


var a = 1/0;
console.log(a);
//output - infinity


b = 2/Infinity;
console.log(b);

c = Math.pow(10,2);
console.log(c);

d = NUMBER.MAX_VALUE;
console.log(d);


/* NAN - Not a  number*/ 

parseInt("1000");
//output = 100

parseInt("aaaa")
//output = NaN

typeof() - function

typeof(a);


b = null;
console.log(typeof(b));
//object

typeof(NaN) ---- //Number will be the output.


10 + 2 
12

13/2
6.5

12/9.2
1.3043478260869565

15.5 % 2
1.5

//only numbers not int or Float

var a = 10;
undefined

a+=2;
12

a +=2;
14

a++;
14

a--;
15

++a;
15

--a;

var b =10
undefined

a==b
false

a === b
false

a >10 && b <20
true

"Hello" + "World"
"HelloWorld"

"Hello" +9 
"Hello9"

"1" + 1
"11"

'1' - 1
0

"1" -1
0
//typeconversion of the string in -,/,*

"1" * 4
4

"4" * 50
200

"1" >0
true
//Typeconversion of the string in case of comparision operator also


var z;
undefined

z + "b"
"undefinedb"


// Difference betweeen == and ===

1 != 1
false

1 != '1'
false

1 == '1'
true
//the above type conversion is called as type coersion

1 == 1
true

1 == '1'
true

1 != '1'
false

// in above case the typeconversion takes place and answer is true and hence false in next command

1 === 1
true

1 === '1'
false

//to compare on the value without type conversion

1 !== '1'
true

var a =10 ;
undefined


//Loop 

var i =1 ;

while(i <= 5){
	console.log(i);
	i++;
}

for(i=1;i<=5;i++){
	console.log(i);
}

do{
	console.log(i);
	i++;
}while(i <=5);


