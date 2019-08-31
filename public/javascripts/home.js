$.ajax({
    url:'/api/producto/',
    method:'GET',
    data:{},
    dataType:'JSON',
}).done(function(data){
    data.forEach(element => {
        if(element.tipo==='servicios'){
            var card = '<div class="col-md-4 col-sm-4 col-xs-12">'+
                            '<a href="/detalle/'+element._id+'"> '+ 
                                '<div class="col-md-12 col-xs-12 col-sm-12 cardsHome" style="background-image: url(/images/'+element.img+');">'+
                                    '<div class="row cardServicios">'+    
                                        '<h4>'+element.nombre+'</h4>'+
                                    '</div>'+  
                                '</div>'+    
                            '</a>'+ 
                        '</div>';
            $('#contentServicios').append(card);
        }else if(element.tipo==="invitacion-impresa"){
            var card = '<div class="col-md-4 col-sm-4 col-xs-12">'+
                            '<a href="/detalle/'+element._id+'"> '+ 
                                '<div class="col-md-12 col-xs-12 col-sm-12 cardsHome" style="background-image: url(/images/'+element.img+');"></div>'+    
                            '</a>'+ 
                        '</div>';
            $('#contenInvImpresa').append(card);
        }else if(element.tipo==="invitacion-digital"){
            var card = '<div class="col-md-4 col-sm-4 col-xs-12">'+
                            '<a href="/detalle/'+element._id+'"> '+ 
                                '<div class="col-md-12 col-xs-12 col-sm-12 cardsHome" style="background-image: url(/images/'+element.img+');"></div>'+    
                            '</a>'+ 
                        '</div>';
            $('#contenInvDigital').append(card);
        }
    });

}).fail(function(){
    alert('Error!');
});