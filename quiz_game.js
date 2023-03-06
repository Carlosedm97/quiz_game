let respuestas = ["roma", "oslo", "lima"];
let respuestasUsuario = [];

function guardarRespuestas(num_pregunta, seleccion){
    respuestasUsuario[num_pregunta] = seleccion.value;
}
   
function validarRespuestas(){
    let correctas = 0;

    for(let i = 0; i < respuestasUsuario.length; i++){
        if(respuestasUsuario[i] == respuestas[i]){
            correctas += 1;
        }
    }

    document.getElementById("resultado").innerHTML = correctas;
}
