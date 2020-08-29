function getnasaimage() {
 
    console.log('Button clicked')

    function displayImage(data) {
        
        $('<img>',{
                src : data.url,
                width:'50%',
                height:'50%'
            }).appendTo('#image-container');
    
    }

    function getdate(){
        var $j = jQuery.noConflict();
        var mydatevar = $j("#datepicker").datepicker({
            onSelect: function (selectedDate) {
                alert(selectedDate);
            }
        });
        return mydatevar;
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
            date: getdate(),
        }
    })
    
    
}
 
