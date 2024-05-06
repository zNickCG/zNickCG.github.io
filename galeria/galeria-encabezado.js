var header = document.getElementById('header');

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#121212'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})

function toggleImage(imageId) {
    var continuar = true;
    while(continuar){
        var arriba = document.getElementById('flechita-arriba');
        var abajo = document.getElementById('flechita-abajo');
        if (arriba.style.display === 'none') {
            arriba.style.display = 'inline-block';
            abajo.style.display = 'none';
            continuar= false;
        }else if(abajo.style.display === 'none'){
            abajo.style.display = 'inline-block';
            arriba.style.display = 'none';
            continuar= false;
        }
        else {
            arriba.style.display = 'none';
        }
    }
}