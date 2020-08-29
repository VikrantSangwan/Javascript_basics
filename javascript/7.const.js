const c = 20; //cannot reassign this value


//this is not allowed initalisation should be done is same line.
const d;
d =20;

console.log(a); // output - indefined (due to hoisting)
var a =10;

//output - reference error - d is not defined
console.log(d);
const d =40;



//output - 10,20 and undefined
var a =10;

if(a <= 10){
    //global scope
    var b =20;
}
else{
    //global scope
    var c = 20;
}

console.log(a,b,c);


//*LET keyword*//
 //to create block scope

 var a =10;

if(a <= 10){
    //global scope
    let  b =20;
}
else{
    //global scope
    let c = 20;
}

//output - error since b and c are not available outside the scope
console.log(a,b,c);


//output - 666666 bcs we have used var and called timeout function after 1000ms second.
//till then i reaches to max value.
for(var x=1;x<=5;x++){
    setTimeout(function(){
        console.log(x);
    },1000);
}

//to avoid above condition.
//here every set interval will have different i bound to it.
for(let x=1;x<=5;x++){
    setTimeout(function(){
        console.log(x);
    },1000);
}


/*for of*/
var arr = [1,2,3,4,5];

for(var i=0;arr.length;i++){
    console.log(arr[i]);
}


for(let i of arr){
    console.log(i);
}