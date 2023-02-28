function Mas(){
    document.getElementById("Datos").style.display= "block"
    document.getElementById("Agradecimiento").style.display= "none"
}
function Menos(){
    document.getElementById("Datos").style.display= "none"
    document.getElementById("Agradecimiento").style.display= "block"
}

function Mas_menos(){
    var boton= document.getElementById("Datos");

    if(boton.style.display == "block"){
        Menos();
        document.getElementById("boton").value ="Informacion"
    }
    else {
        Mas();
        document.getElementById("boton").value = "Agradecimiento"
    }
}