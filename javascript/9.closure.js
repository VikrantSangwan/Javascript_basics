var var1 = 10;

function outer(){
    var b = 40;
    console.log(b);
}

console.log(var1);

//anything in the global scope is window property
window.var1;
window.outer();

var a = 10;

function outer1(){
    var b =10;
    console.log(a,b);
}

outer();