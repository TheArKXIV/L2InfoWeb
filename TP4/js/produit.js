console.log('Hello world :) !');

$(document).ready(function(){
    $('#incqtt').click(function() {
        $('#quantity').val( function(i, oldval) {
            return ++oldval;
        });
        $('#quantity').html(parseInt($('#quantity').html(), 10)+1)
    })

    $('#decqtt').click(function() {        
        if($('#quantity').val() > 1){
            $('#quantity').val( function(i, oldval) {
                return --oldval;
            });
            $('#quantity').html(parseInt($('#quantity').html(), 10)-1)
        }
    })
});