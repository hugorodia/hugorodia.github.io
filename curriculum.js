
//Menu Lateral
const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'images/Scenario.png'){
        e.target.setAttribute('src','images/Back.png');
    }else{
        e.target.setAttribute('src','images/Scenario.png');
    }
});

    //Creo Función Imprimir Documento
    function imprimirPagina() {
        window.print();
    }


