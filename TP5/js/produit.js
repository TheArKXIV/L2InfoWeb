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

    $('.mini').click(function() {
        $('.mini').removeClass("selected");
        var loc = $(this).attr("src");
        $('#grd').attr("src",loc);
        $(this).addClass("selected");
    });

    $(document).on('keypress',function(e) {
        var obj = new Object();
        var d = new Date();
        var strDate =   d.getDate() + "/" + (d.getMonth()+1) + "/" +d.getFullYear();
        if( $('#nouvavis').val()!=''){
            if(e.which == 13) {
                var text = $('#nouvavis').val();
                obj.date=strDate;
                obj.avis=text;
                var myString = JSON.stringify(obj);
                var text = $('#nouvavis').val('');
                console.log(myString);
            }
        }
    });


});