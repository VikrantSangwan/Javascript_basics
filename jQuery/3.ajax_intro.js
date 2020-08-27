
$('#fetchbutton').click(fetchRandomDogImage);

 function fetchRandomDogImage(){

        /*FIRST Method BASIC*/
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
//     xhrRequest.send();

//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);
//         var JSONresponse = JSON.parse(xhrRequest.response);
//         var ImageUrl = JSONresponse.message;

//         $('#ImageOfdog').attr('src',ImageUrl);
//     }

    /*SECOND METHOD*/
//        $.ajax({
//         url: 'https://dog.ceo/api/breeds/image/random',
//         method: 'GET',
//         success : function(data){
//             var ImageUrl = data.message;
//             $('#ImageOfdog').attr('src',ImageUrl);
//         }
//     });


    /*THIRD METHOD*/
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var ImageUrl = data.message;
        $('#ImageOfdog').attr('src',ImageUrl);
    })

}
