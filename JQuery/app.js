$(document).ready(function(){
    /*
    $('h1').html('Etiqueta h1');
    $('.display-4').html('desde clase');
    $('#idh1').html('desde id');

    document.querySelector('h1').innerHTML = 'Etiqueta h1'; //js
    */
    // $('.container h1').html('cambio de texto'); // accedemos a todos los h1 de container
    //$('.container h1:first').html('cambio de texto');
    //$('.container h1:last').html('cambio de texto');

    //$('#idh1').addClass('text-danger'); // añadir clase
    //$('#idh1').removeClass('display-4'); //elimiinar clase
    //$('#contenido').append('<h1>Este es un elemento al final</h1>'); //añadir elementos al final
    //$('#contenido').prepend('<h1>Este es un elemento al principio</h1>');//añádir elementos al principio

    //$('#color-azul').css('color', 'blue'); //cambiamos el css
    //$('#color-azul').css({color: 'blue', background: 'salmon',padding:'20px'}); //varios atributos css
    //$('#color-azul').remove(); //eliminar elemento (no aparece en el inspector de elementos)
   // $('#color-azul').hide(); //oculta el elemento (aparece en el inspector de elemntos)

   //$('img').attr('src', 'https://getbootstrap.com/docs/4.4/assets/img/bootstrap-themes.png'); //agregar imagen
   //$('img:last').attr('width','100'); //cambiar tamaño de la ultima imagen

//    var parrafo = $('#resultado p');

//     $('.btn-primary').click(function(){
//         parrafo.addClass('display-4');
//     })

//     $('.btn-warning').click(function(){
//         parrafo.removeClass('display-4');
//     })

//     $('.btn-danger').click(function(){
//         parrafo.toggleClass('display-4');
//     })

    // $('#formulario').submit(function(evento){
    //     evento.preventDefault();
    //     var nombre = $('#nombre').val();
    //     console.log(nombre);
    // })


    // var resultado = $('#resultado');

    // $('.btn-primary').click(function(){
    //     resultado.fadeOut(3000); //ocultar
    // })

    // $('.btn-warning').click(function(){
    //    resultado.fadeIn(3000) //mostrar
    // })

    // $('.btn-danger').click(function(){
    //     resultado.toggle(1000)
    // })


    var resultado = $('#resultado');

    $('.btn-primary').click(function(){
        resultado.animate({
            left:'250px',
            opacity:'0.5',
            height:'+=150px',
            width: '+=150px'
        }, 3000,function(){
            resultado.animate({
                left:'0px',
                opacity:'1',
                height:'-=150px',
                width: '-=150px'
            },1000)
        }); 
    })
});
