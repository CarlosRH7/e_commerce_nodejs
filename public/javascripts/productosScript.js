
    $('#formAddProducto').submit(function(event) {
        event.preventDefault();
        var formData = new FormData($('#formAddProducto')[0]);
        console.log(formData);
        $.ajax({
            url: '/api/producto/',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            async:  false,
            cache:  false
        }).done( function( data ) {
            alert( 'El producto se agrego de manera correcta' );
            
        }).fail( function( jqXHR, textStatus, errorThrown) {
            alert( 'Intentar más tarde' );
        });
    });