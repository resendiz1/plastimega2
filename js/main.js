(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Features Section
    $(".feature-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Blogs Section
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Features Section
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });



   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


document.addEventListener('DOMContentLoaded', ()=>{

    const imagenes = document.querySelectorAll('img')
    imagenes.forEach(imagenes => {
        imagenes.oncontextmenu = () => false;
        imagenes.ondragstart = () => false;
        imagenes.onmousedown = () => false;
    });
});





document.addEventListener("keyup", function(e) {
    if (e.key === "PrintScreen") {

        // Reemplazar contenido del portapapeles 
        navigator.clipboard.writeText("Contenido protegido por Plastimega")
        .then(() => {
        alert("Captura bloqueada (parcialmente): se reemplazó el portapapeles");
        })
        .catch(err => {
        console.error("Error al escribir en el portapapeles:", err);
        });
        // Reemplazar contenido del portapapeles


        this.body.innerHTML="<h1>No está permitido tomar capturas de pantalla.! </h1>";
        setTimeout(()=>{
            this.location.reload();
        },4000)
        alert("No está permitido tomar capturas de pantalla.");

    }
  });





{  



(function(){
    emailjs.init("m202FJpgz8JlMhJrh");
})();




  //validacion de los datos del formulario
  if(document.getElementById('contacto_cliente')){

  
   let $nombre = document.getElementById('nombre_cliente');
   let $correo = document.getElementById('email_cliente');
   let $telefono = document.getElementById('telefono_cliente');
   let $asunto = document.getElementById('asunto_cliente');
   let $mensaje = document.getElementById('mensaje_cliente');
   let $error = document.getElementById('error');
   let $success = document.getElementById('success');



document.getElementById('contacto_cliente').addEventListener('click', ()=>{

    console.log($nombre.value)

    if($nombre.value === "" || $correo.value === "" || $telefono.value === "" ||  $asunto.value === "" || $mensaje.value === ""){
    
        $error.classList.remove('d-none');
        setTimeout(()=>{
        $error.classList.add('d-none');

        }, 5000)
    
    }
    else{


        // alert($nombre.value + $correo.value + $telefono.value + $asunto.value + $mensaje.value)
        emailjs.send("service_9m5rcfq", 'template_jxef3lh', {
            
            nombre_cliente: $nombre.value,
            correo_cliente: $correo.value,
            telefono_cliente: $telefono.value,
            asunto_cliente: $asunto.value,
            mensaje_cliente: $mensaje.value,

        }).then(function(response){

            $nombre.value = "";
            $correo.value = "";
            $telefono.value = "";
            $asunto.value = "";
            $mensaje.value = "";

            $success.classList.remove('d-none');
            setTimeout(()=>{
                $success.classList.add('d-none');
            }, 5000);


            console.log(response.status);

            
        }, function(error){

            alert('error enviar')
            console.log("error al enviar" + error)

        })


    }

})
}

}









// Este es el js de el catalogo
{

let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid rgb(16, 34, 99)";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}




}


