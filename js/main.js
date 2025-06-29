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
  $(document).ready(function(){
    $(".blog-carousel").owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      nav: true,
      dots: false,
      autoplay: false,
      navText: [
        '<i class="fa fa-chevron-left fa-3x"></i>',
        '<i class="fa fa-chevron-right fa-3x"></i>'
      ],
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        992:{ items:3 }
      }
    });
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





// ENVIO DE CORREOS ELECTRONICOS


{  



(function(){
    emailjs.init("m202FJpgz8JlMhJrh");
})();





  //validacion de los datos del formulario
  if(document.getElementById('contacto_clientes1')){

  
   let $nombre = document.getElementById('nombre_clientes1');
   let $correo = document.getElementById('email_clientes1');
   let $telefono = document.getElementById('telefono_clientes1');
   let $asunto = document.getElementById('asunto_clientes1');
   let $mensaje = document.getElementById('mensaje_clientes1');
   let $error = document.getElementById('error');
   let $formulario = document.getElementById('formulario1');
   let $success = document.getElementById('success');
   let $email_send1 = document.getElementById('email_send1');
   let $email_send2 = document.getElementById('email_send2');
   let $email_send3 = document.getElementById('email_send3');

   let $botton = document.getElementById('contacto_clientes1');



    $botton.addEventListener('click', ()=>{



    $botton.innerHTML = '<img src="img/loader.webp" style="width: 30px;" alt="">';


    if($nombre.value === "" || $correo.value === "" || $telefono.value === "" ||  $asunto.value === "" || $mensaje.value === ""){
    
        $error.classList.remove('d-none');
        setTimeout(()=>{
        $error.classList.add('d-none');
        $botton.innerHTML = 'Enviar Mensaje';
        }, 3000)
    
    }
    else{


        // alert($nombre.value + $correo.value + $telefono.value + $asunto.value + $mensaje.value)
        emailjs.send("service_9m5rcfq", 'template_jxef3lh', {
            
            nombre_cliente: $nombre.value,
            correo_cliente: $correo.value,
            telefono_cliente: $telefono.value,
            asunto_cliente: $asunto.value,
            mensaje_cliente: $mensaje.value,
            email_send1: $email_send1.value,
            email_send2: $email_send2.value,
            email_send3: $email_send3.value,
            formulario:$formulario.value

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

            $botton.innerHTML = 'Enviar Mensaje';
            console.log(response.status);

            
        }, function(error){

            alert('error enviar')
            console.log("error al enviar" + error)

        })


    }

})
}




  if(document.getElementById('contacto_clientes2')){

  
   let $nombre = document.getElementById('nombre_cliente2');
   let $correo = document.getElementById('email_cliente2');
   let $telefono = document.getElementById('telefono_cliente2');
   let $asunto = document.getElementById('asunto_cliente2');
   let $mensaje = document.getElementById('mensaje_cliente2');
   let $error = document.getElementById('error2');
   let $success = document.getElementById('success2');
   let $botton = document.getElementById('contacto_clientes2');



    $botton.addEventListener('click', ()=>{



    $botton.innerHTML = '<img src="img/loader.webp" style="width: 30px;" alt="">';

    console.log($nombre.value)

    if($nombre.value === "" || $correo.value === "" || $telefono.value === "" ||  $asunto.value === "" || $mensaje.value === ""){
    
        $error.classList.remove('d-none');
        setTimeout(()=>{
        $error.classList.add('d-none');
        $botton.innerHTML = 'Enviar Mensaje';
        }, 3000)
    
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

            $botton.innerHTML = 'Enviar Mensaje';
            console.log(response.status);

            
        }, function(error){

            alert('error enviar')
            console.log("error al enviar" + error)

        })


    }

})
}



  if(document.getElementById('contacto_clientes3')){

  
   let $nombre = document.getElementById('nombre_cliente3');
   let $correo = document.getElementById('email_cliente3');
   let $telefono = document.getElementById('telefono_cliente3');
   let $asunto = document.getElementById('asunto_cliente3');
   let $mensaje = document.getElementById('mensaje_cliente3');
   let $error = document.getElementById('error3');
   let $success = document.getElementById('success3');
   let $email_send1 = document.getElementById('email_send1');
   let $email_send2 = document.getElementById('email_send2');
   let $formulario = document.getElementById('formulario');
   let $botton = document.getElementById('contacto_clientes3');



    $botton.addEventListener('click', ()=>{



    $botton.innerHTML = '<img src="img/loader.webp" style="width: 30px;" alt="">';

    console.log($nombre.value)

    if($nombre.value === "" || $correo.value === "" || $telefono.value === "" ||  $asunto.value === "" || $mensaje.value === ""){
    
        $error.classList.remove('d-none');
        setTimeout(()=>{
        $error.classList.add('d-none');
        $botton.innerHTML = 'Enviar Mensaje';
        }, 3000)
    
    }
    else{


        // alert($nombre.value + $correo.value + $telefono.value + $asunto.value + $mensaje.value)
        emailjs.send("service_9m5rcfq", 'template_jxef3lh', {
            
            nombre_cliente: $nombre.value,
            correo_cliente: $correo.value,
            telefono_cliente: $telefono.value,
            asunto_cliente: $asunto.value,
            mensaje_cliente: $mensaje.value,
            email_send1: $email_send1.value,
            formulario: $formulario.value,
            email_send2: $email_send2.value,

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

            $botton.innerHTML = 'Enviar Mensaje';
            console.log(response.status);

            
        }, function(error){

            alert('error enviar')
            console.log("error al enviar" + error)

        })


    }

})
}


  if(document.getElementById('contacto_clientes4')){

  
   let $nombre = document.getElementById('nombre_clientes4');
   let $correo = document.getElementById('email_clientes4');
   let $telefono = document.getElementById('telefono_clientes4');
   let $asunto = document.getElementById('asunto_clientes4');
   let $mensaje = document.getElementById('mensaje_clientes4');
   let $formulario = document.getElementById('formulario4');
   let $email_send1 = document.getElementById('email_send1');
   let $error = document.getElementById('error4');
   let $success = document.getElementById('success');
   let $botton = document.getElementById('contacto_clientes4');



    $botton.addEventListener('click', ()=>{



    $botton.innerHTML = '<img src="img/loader.webp" style="width: 30px;" alt="">';

    console.log($nombre.value)

    if($nombre.value === "" || $correo.value === "" || $telefono.value === "" ||  $asunto.value === "" || $mensaje.value === ""){
    
        $error.classList.remove('d-none');
        setTimeout(()=>{
        $error.classList.add('d-none');
        $botton.innerHTML = 'Enviar Mensaje';
        }, 3000)
    
    }
    else{


        // alert($nombre.value + $correo.value + $telefono.value + $asunto.value + $mensaje.value)
        emailjs.send("service_9m5rcfq", 'template_jxef3lh', {
            
            nombre_cliente: $nombre.value,
            correo_cliente: $correo.value,
            telefono_cliente: $telefono.value,
            asunto_cliente: $asunto.value,
            email_send1: $email_send1.value,
            mensaje_cliente: $mensaje.value,
            formulario: $formulario.value

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

            $botton.innerHTML = 'Enviar Mensaje';
            console.log(response.status);

            
        }, function(error){

            alert('error enviar')
            console.log("error al enviar" + error)

        })


    }

})
}



//




}

// ENVIO DE CORREOS ELECTRONICOS










{
    if(document.getElementById('buscador')){


    document.getElementById('buscador').addEventListener('keyup', function () {
        const filtro = this.value.toLowerCase();
        const items = document.querySelectorAll('.item');
        let encontrados = 0;

        items.forEach(item => {
            const descripcion = item.getAttribute('data-descripcion').toLowerCase();

            if (descripcion.includes(filtro)) {
                item.style.display = 'block';
                encontrados++;
            } else {
                item.style.display = 'none';
            }
        });

        // Mostrar u ocultar el mensaje
        const mensaje = document.getElementById('mensaje-no-encontrado');
        if (encontrados === 0) {
            mensaje.style.display = 'block';
        } else {
            mensaje.style.display = 'none';
        }



    });
    }

}



    function actualizarNavbar() {

        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const navbar = document.querySelector('.custom-navbar');
        let opacity = Math.min(scrollY / 500, 3); // ajusta el divisor según qué tan rápido querés que se opaque
        navbar.style.backgroundColor = `rgba(12, 24, 68, ${opacity})`; // azul marino con opacidad gradual

    }

    // Ejecutar al cargar la página
    window.addEventListener('DOMContentLoaded', actualizarNavbar);
    window.addEventListener('load', actualizarNavbar);

    // Ejecutar cuando se hace scroll
    window.addEventListener('scroll', actualizarNavbar);
    window.addEventListener('touchmove', actualizarNavbar);




    {

        

    function toggleMenu() {
        document.getElementById('menuLinks').classList.toggle('active');
    }

    // Cierre automático de submenú al volver a hacer clic o hacer clic fuera
    document.addEventListener('click', function (e) {
        const isDropdownButton = e.target.classList.contains('dropdown-btn');
        const openDropdown = document.querySelector('.dropdown.open');

        if (isDropdownButton) {
            const dropdown = e.target.parentElement;

            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                if (openDropdown) {
                    openDropdown.classList.remove('open');
                }
                dropdown.classList.add('open');
            }

            e.stopPropagation();
        } else {
            if (openDropdown) {
                openDropdown.classList.remove('open');
            }
        }
    });

    // Cierre automático del menú hamburguesa al hacer clic en un enlace
    document.addEventListener('DOMContentLoaded', () => {
        const menuLinks = document.getElementById('menuLinks');
        const links = menuLinks.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                menuLinks.classList.remove('active');
            });
        });
    });

    }





{

const imageMaps = {

  silla_paris: {
    white: 'img/catalogo/silla_paris_blanca.jpg',
    blue: 'img/catalogo/silla_paris_azul.jpg'
  },

  silla_milan: {
    red: 'img/catalogo/silla_milan.jpg',
    green: 'img/catalogo/silla_milan.jpg',
    yellow: 'img/catalogo/silla_milan.jpg',
    blue: 'img/catalogo/silla_milan.jpg'
  },

 caja_miguel_negrete_5:{

    red: 'img/catalogo/caja_miguel_negrete_5_roja_10kg.jpg',
    purple: 'img/catalogo/caja_miguel_negrete_5_morada.jpg',
    dark: 'img/catalogo/caja_miguel_negrete_5_10kg.jpg',



  }
  // ... y así hasta producto20
};

// Asignar eventos
document.querySelectorAll('.color-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const color = button.getAttribute('data-color');

    // Cambiar imagen
    const imageElement = document.querySelector(`[data-product-image="${product}"]`);
    if (imageElement && imageMaps[product] && imageMaps[product][color]) {
      imageElement.src = imageMaps[product][color];
    }

    // Actualizar botones activos solo en este producto
    document.querySelectorAll(`.color-btn[data-product="${product}"]`)
      .forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
  });
});
    
}