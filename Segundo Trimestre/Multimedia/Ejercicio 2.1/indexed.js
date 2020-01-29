var bd;
function iniciar(){
    zonadatos=document.getElementById("zonadatos");
    boton=document.getElementById("grabar");
    boton.addEventListener("click",agregarobjeto,false);

    var solicitud=indexedDB.open("mibase2");

    solicitud.onsuccess=function(e){
        bd=e.target.result;
    }

    solicitud.onupgradeneeded=function(e){
        bd=e.target.result;
        bd.createObjectStore("alumno", {keyPath: "dni"});
    }
}
function agregarobjeto(){
    var dni=document.getElementById("dni").value;
    var nombre=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellidos").value;
    var transaccion=bd.transaction(["alumno"], "readwrite");
    var almacen=transaccion.objectStore("alumno");
    var agregar=almacen.add({dni: dni, nombre: nombre, apellidos: apellidos});

    agregar.addEventListener("success",mostrar,false);

    document.getElementById("dni").value=""

    document.getElementById("nombre").value=""

    document.getElementById("apellidos").value=""

}

function mostrarDatos(e){
    var cursor=e.target.result;
    if(cursor){
        zonadatos.innerHTML+=
        "<div>"+
        cursor.value.dni +
        " - " + cursor.value.nombre +
        " - " + cursor.value.apellidos +
        "</div>";
        cursor.continue();
    }
}

window.addEventListener("load",iniciar,false);

function mostrar(){
    zonadatos.innerHTML="";
    var transaccion=bd.transaction(["alumno"],"readonly");
    var almacen=transaccion.objectStore("alumno");
    var cursor=almacen.openCursor();
    cursor.addEventListener("success",mostrarDatos,false);
}