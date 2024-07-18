window.onload = function(){
    cargaInicial();
}

/*function cargaInicial(){
    document.getElementById("java").innerHTML = "Hola JavaScript";
    document.getElementById("java").style.color="yellow";
}
*/

function clickButton(){
    var letras = document.getElementById("java");
    var color = window.getComputedStyle(letras).color;
    if(color === "rgb(254, 174, 111)"){
        letras.style.color = "#ffffff";
    } else {
        letras.style.color = "#feae6f";
    }
}
function OcultarImg(){
    var imagen = document.getElementById("pecera");
    if(imagen.style.display === "none"){
        imagen.style.display = "block";
    }else{
        imagen.style.display = "none";
    }
    document
}

function CambiarClase(){
    var parrafo = document.getElementById("parrafo");
    if(parrafo.className==="texto-small"){
        parrafo.className="texto-large";
    }else{
        parrafo.className="texto-small";
    }
}
function CambiarTamano(valor){
    document.getElementById("parrafoajustable").style.fontSize=valor+"px";
}