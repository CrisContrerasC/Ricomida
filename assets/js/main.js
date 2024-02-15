$(document).ready(function () {
    //Configuración popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    //Configuración de tooltips

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    

    // 2. Configuración del tooltip
    $('#enviar_correo').attr('title', 'Presiona para enviar a tu correo');
    $('#btn_favorito').attr('title', 'Agrega esta receta a tus favoritos');
    $('[data-bs-toggle="tooltip"]').tooltip();

    // 3. Evento: alerta al hacer click 
    $("#enviar_correo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    // 4. Selector de etiqueta
    $("h5:contains('INGREDIENTES')").on("dblclick", function () {
        $(this).css({
            color: "red"
        });
    });

    $("h5:contains('PREPARACION')").on("dblclick", function () {
        $(this).css({
            color: "red"
        });
    })

    //5. Selectores de clase

       $("h4").on( "click", function() {	 
        $('.card-body p').toggle();
         })

})