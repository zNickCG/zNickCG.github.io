function perfil() {
    var continuar = true;
    while(continuar){
        var informacion = document.getElementById('i-perfil');
        var programas = document.getElementById('div-perfil');
        var boton = document.getElementById('btn-perfil');
        if (informacion.style.display === 'none') {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info";
        }else if(informacion.style.display === 'block'){
            informacion.style.display = 'none';
            programas.style.height = '250px';
            continuar= false;
            boton.innerHTML = "+ Info"; 
        }
        else {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info"; 
        }
    }
}

function mision() {
    var continuar = true;
    while(continuar){
        var informacion = document.getElementById('i-mision');
        var programas = document.getElementById('div-mision');
        var boton = document.getElementById('btn-mision');
        if (informacion.style.display === 'none') {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info";
        }else if(informacion.style.display === 'block'){
            informacion.style.display = 'none';
            programas.style.height = '250px';
            continuar= false;
            boton.innerHTML = "+ Info"; 
        }
        else {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info"; 
        }
    }
}

function vision() {
    var continuar = true;
    while(continuar){
        var informacion = document.getElementById('i-vision');
        var programas = document.getElementById('div-vision');
        var boton = document.getElementById('btn-vision');
        if (informacion.style.display === 'none') {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info";
        }else if(informacion.style.display === 'block'){
            informacion.style.display = 'none';
            programas.style.height = '250px';
            continuar= false;
            boton.innerHTML = "+ Info"; 
        }
        else {
            informacion.style.display = 'block';
            programas.style.height = 'auto';
            continuar= false;
            boton.innerHTML = "- Info"; 
        }
    }
}