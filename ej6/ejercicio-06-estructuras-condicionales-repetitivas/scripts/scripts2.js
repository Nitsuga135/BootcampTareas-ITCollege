console.log("-----------------------------\n"+
            "ejercicio2\n"+
            "-----------------------------")

let pasos = "🐾"
let acumuladorPasos ="";

cantidadDeGatos = prompt("Ejercicio 2 ingrese cantidad de gatos");
let cantidadDePasos = prompt("Ingrese cantidad de pasos");


for(let i = 0; i < cantidadDeGatos; i++){
    
    if(cantidadDeGatos == 0){

        break;

    }else{
        for(let j = 0 ; j < cantidadDePasos; j++){

            acumuladorPasos += pasos;

        }
        
        console.log(`Gato ${i+1}: 🐈 ${acumuladorPasos}`)
        
        acumuladorPasos = "";
        
    };
}