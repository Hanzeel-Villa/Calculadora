let resultado = document.getElementById("pantalla");

function calcular(numero){
    resultado.value += numero;
}


let Resultado = () =>{
    try{
        resultado.value = eval(resultado.value);
    }
    catch(error){
        alert("Ingrese una operación valida");
        resultado.value = "";
    }
}

function limpiar(){
    resultado.value = "";
}

function eliminar(){
    resultado.value = resultado.value.slice(0, -1);
}
