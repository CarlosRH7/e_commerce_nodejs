$.ajax({
    url:'http://localhost:3000/api/producto/',
    method:'GET',
    data:{},
    dataType:'JSON',
}).done(function(data){

    console.log(data);
    
    data.forEach(element => {
        if(element.tipo==1){
            var card = '<div class="col-md-4 col-sm-4 col-xs-12"> <h4>'+element.nombre+'</h4> <br> <a class="btn btn-success" href="/detalle/'+element._id+'">Ver más</a> </div>';
            $('#contentServicios').append(card);
        }else if(element.tipo==2){

        }
    });

}).fail(function(){
    alert('Error!');
});