var tajetaTarea;
var tarjetaNueva;
var nombrePrueba;
var columna;
var importanciaPrueba;

function añadirTarea(idTabla){
    nombrePrueba=document.getElementById('tarea').value
    importanciaPrueba=document.getElementById('importancia').value
    if(nombrePrueba && importanciaPrueba){
        tajetaTarea=document.getElementById('tarjetaTarea');
        columna=document.getElementById(idTabla)
        tarjetaNueva=tajetaTarea.cloneNode(true)
        tarjetaNueva.children[1].innerHTML=nombrePrueba
        tarjetaNueva.children[4].innerHTML=importanciaPrueba
        tarjetaNueva.classList.add("tarjetaTareaVisible")
        tarjetaNueva.classList.remove('tarjetaTarea')
        columna.appendChild(tarjetaNueva)
        document.getElementById('tarea').value=""
        document.getElementById('importancia').value=""      
    }
}
function moverElemento(id){
    if(id.value=="todo"){
        tajetaTarea=id.parentNode.parentNode;
        columna=document.getElementById(id.value);
        tarjetaNueva=tajetaTarea.cloneNode(true);
        tarjetaNueva.children[1].innerHTML=nombrePrueba;
        tarjetaNueva.children[4].innerHTML=importanciaPrueba;
        columna.appendChild(tarjetaNueva);
        id.parentNode.parentNode.parentNode.removeChild(tajetaTarea)

    }else if(id.value=="enprogreso"){
        tajetaTarea=id.parentNode.parentNode;
        columna=document.getElementById(id.value);
        tarjetaNueva=tajetaTarea.cloneNode(true);
        tarjetaNueva.children[1].innerHTML=nombrePrueba;
        tarjetaNueva.children[4].innerHTML=importanciaPrueba;
        columna.appendChild(tarjetaNueva);
        id.parentNode.parentNode.parentNode.removeChild(tajetaTarea)

    }else if(id.value=="terminado"){
        tajetaTarea=id.parentNode.parentNode;
        columna=document.getElementById(id.value);
        tarjetaNueva=tajetaTarea.cloneNode(true);
        tarjetaNueva.children[1].innerHTML=nombrePrueba;
        tarjetaNueva.children[4].innerHTML=importanciaPrueba;
        columna.appendChild(tarjetaNueva);
        id.parentNode.parentNode.parentNode.removeChild(tajetaTarea)
    }

}