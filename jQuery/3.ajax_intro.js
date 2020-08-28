
$('#fetchbutton').click(fetchRandomDogImage);


//This is called a  Vanilla Javascript
 function fetchRandomDogImage(){

    /*FIRST Method BASIC*/

    //creating object on which all operation will be performed
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();

    xhrRequest.onload = function(){
        //console.log(xhrRequest.response);
        
        var JSONresponse = JSON.parse(xhrRequest.response);
        var ImageUrl = JSONresponse.message;

        $('#ImageOfdog').attr('src',ImageUrl);
    }
    xhrRequest.onerror = function(){
        console.log("Request Failed");
    }


    /*SECOND METHOD*/
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/',
    //     method: 'GET',
    //     success : function(data){
    //         var ImageUrl = data.message;
    //         $('#ImageOfdog').attr('src',ImageUrl);
    //     },
    // }).fail(function(){
    //     console.log('error');
    // });



    // /*THIRD METHOD*/
    // $.get('https://dog.ceo/api/breeds/image/', function(data){
    //     var ImageUrl = data.message;
    //     $('#ImageOfdog').attr('src',ImageUrl);
    // }).fail(function(){
    //     console.log("Request Failed");
    // })

}
