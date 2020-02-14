 $(document).ready(function(){
    calcpx();

        $('.delbtn').click(function() { 
            var qte        
            if($(this).closest('tr').find('.qtt').attr('value') > 1){
                $(this).closest('tr').find('.qtt').attr('value', function(i, oldval) {
                    qte=--oldval;
                    return qte;
                });
                $(this).closest('tr').find('.qtt').html(qte)
            }else{
                $(this).closest("tr").remove();
            }
            calcpx();
        })

        function calcpx() {
            var qte
            var prix, tva, mnttva
            var total = 0
            $('#panier tbody > tr').each(function() {
                qte = $(this).find('.qtt').text();
                prix = $(this).find('.px').text();
                total = total+(qte*prix);
            })
            console.log("total : " + total)
            $('#prix').find('#pxpan').text(total.toFixed(2)+" €")
            tva = $('#prix').find('#tvamnt').text();
            tva = tva/100;
            mnttva=total*tva;
            total=total+mnttva;
            console.log("mnttva : " + mnttva)
            console.log("total + tva: " + total)
            $('#prix').find('#pxtva').text(mnttva.toFixed(2)+" €")
            $('#prix').find('#pxttl').text(total.toFixed(2)+" €")
        
           }; 
        });

