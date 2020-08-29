var userLoggedIn = true;

var promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(userLoggedIn){

            //promise is resolved
            resolve();

        }else{

            //promise is rejected
            reject();
        }
    },1000);
});

promise.then( ()=>{
    console.log('User Logged In');
}).catch(()=>{
    console.log("User not Logged In")
})


//Passing Parameters to promise

var userLoggedIn = true;

function checkUserLogIn(){
var promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(userLoggedIn){
            //this  value is send to then function in successMsg and print it.
            resolve("User Logged In");

        }else{
            reject("User Logged Out");
        }
    },1000);
});
    return promise;
}

promise.then( function (successMsg){
    console.log(successMsg);
}).catch( function(successMsg){
    console.log(successMsg);
})