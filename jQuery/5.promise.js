var userLoggedIn = true;

var promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(userLoggedIn){
            resolve();

        }else{
            reject();
        }
    },1000);
});

promise.then( ()=>{
    console.log('User Logged In');
}).catch(()=>{
    console.log("User not Logged In")
})