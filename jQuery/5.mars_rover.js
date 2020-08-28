function displayit(){

    console.log('Button clicked')

    function displayImage(data) {
        
        $('<img>',{
                src : data.url,
                width:'50%',
                height:'50%'
            }).appendTo('#image-container');
    
     }
    
    $.ajax({
        //basic url with api_key
        url:'https://api.nasa.gov/planetary/apod',

        method:'GET',
        
        //Calling the function on success
        success: displayImage,
       
        //Instead of passing the query in url we can pass them here also
        data: {
            api_key : 'mNFl76H2hD6XK8Oajozi9gSfM15jdSpoDP8ezTpU',
            date: '2019-02-13',
        }
    })
    
    
}
 
