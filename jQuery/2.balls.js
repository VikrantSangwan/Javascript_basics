var count = 0;
var colors = [ '#52BE80','#28B463 ', '#4E67E22 ','#76448A','#E67E22','#2E4053','#0E6655','#0E6251','#F1948A','#BA4A00'];


function addballs(){
    $('.row .one').eq(count).css({
        background : colors[Math.floor((Math.random() * 10))],
        display : "block"
    })
    count++;
}

function clearballs(){
    $(' .row .one').css({
        display: "none"
    })
    count = 0;
}

$('.one').click(function(){
    console.log('Ball clicked');
})