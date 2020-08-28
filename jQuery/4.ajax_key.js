
 function displayImage(data) {

    //performance wise this could be a slower method

    //     $('<img>',{
    //         src : data.url,
    //         width:'50%',
    //         height:'50%'
    //     }).appendTo('#image-container');


    //  var img = $(document.createElement('img'));
    //  img.attr('src',data.url);
    //  img.appendTo('#image-container');

     /*OR*/

    $(document.createElement('img')).attr('src',data.url).appendTo('#image-container');
    
    
 }

$.ajax({
    //basic url with api_key
    url:'https://api.nasa.gov/planetary/apod',
    
    // url with date added after & sign
    //url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-09-23',

    method:'GET',
    
    //Calling the function on success
    success: displayImage,
   
    //Instead of passing the query in url we can pass them here also
    data: {
        api_key : 'mNFl76H2hD6XK8Oajozi9gSfM15jdSpoDP8ezTpU',
        date: '2019-02-23',
    }
})

