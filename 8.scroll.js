//scroll to position 200 px form top. and x scroll =0
//scrollTo(x,y);
window.scrollTo(0,200);

//scroll to position 650px from top
window.scrollTo(0, 650);

//to know where you are 
window.pageYOffset;

//to scroll by from current position to given px
//scrollBy(x,y);
window.scrollBy(0,200);

//for smooth scroll use set interval and scrollBy together
var scrollInterval = setInterval(() => {
    window.scrollBy(0,50);
}, 50);
//remember it will keep to scrolling to bottom

clearInterval(scrollInterval);

//example to scroll 150px
var targetPos = 1500;
var currentpos = 0;
var scrollInterval = setInterval(() => {
    if(currentpos == targetPos){
        clearInterval(scrollInterval);
        return;
    }
    currentpos = currentpos + 50;
    window.scrollBy(0,50);
}, 50);



//Getting the target div
var divname = document.getElementById('Idname');

//Getting the x and y coordinates
var coordinates = divname.getBoundingClientRect();

//to prevent default srolling behaviour
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionID = this.textContent.trim().toLowerCase();
        console.log(targetsectionID);
        var targetsection = document.getElementById(targetsectionID);
        var interval = setInterval(() => {
            var targetsectioncoordinates = targetsection.getBoundingClientRect;
            if(targetsectioncoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

//Different scoll method
var interval;

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionID = this.textContent.trim().toLowerCase();
        console.log(targetsectionID);
        var targetsection = document.getElementById(targetsectionID);
        //How to pass arguments to the function in setInterval. 
        interval = setInterval(scrollVertically, 20,targetsection);
    });
}

function scrollVertically(){
        var targetsectioncoordinates = targetsection.getBoundingClientRect;
        if(targetsectioncoordinates.top <= 0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0, 50);
}


//animation of skills bar

// Handling scroll event on window
// Check that skills sections container is visible or not
// ensure that inital width of colored skill divs is Zero --> initalised/Rect to 0 width value
// start animation on every skill --> increase skill width from 0 to skill level at regular intervals
// store skill level --> HTML with the help data-attribute

var progressBars = document.querySelector('.container-name > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkscroll());
var animationDone = false;

//setting width of bar width = 0 ;
function initialisedBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}

initialisedBars();
//filling of bars
function fillBars(){
    for(let bar of progressBars){
       let targetwidth = bar.getAttribute('data-width-bar');
       let currentwidth = 0;
       let interval = setInterval(() => {
           if(currentwidth >= targetwidth){
               clearInterval(interval);
               return;
           }
           currentwidth++;
           bar.style.width = currentwidth + "%";
       }, 5);

    }
}

function checkscroll(){

    //You have to check whether skill container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    //skill section is visible
    if(!animationDone && coordinates.top < window.innerHeight){
        //To stop repeating the code
        animationDone = true;
        console.log('Skill section is visible');
        //fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialisedBars();
    }
}


//Counter



