const boton =document.getElementById("b");
function redirigir(){
    let nucleo =document.getElementById("T").value;
    if(nucleo=== "1"){
        window.location.href = "refineria.html";
    }
    else if(nucleo=== "2"){
        window.location.href="almacen.html";
    }
    else if(nucleo=== "3"){
        window.location.href="bomba.html";
    }
    else if(nucleo === "4"){
        window.location.href="admin.html"
    }
    return
}
boton.addEventListener("click", function(event){
    event.preventDefault();
    redirigir();
})
