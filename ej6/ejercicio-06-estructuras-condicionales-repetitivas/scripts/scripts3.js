console.log("-----------------------------\n"+
            "ejercicio3\n"+
            "-----------------------------")

pasos = "🐾"
acumuladorPasos ="";

cantidadDeGatos = prompt("Ejercicio 2 ingrese cantidad de gatos");
cantidadDePasos = prompt("Ingrese cantidad de pasos");


for(let i = 0; i < cantidadDeGatos; i++){
    
    if(cantidadDeGatos == 0){

        break;

    }else{
        for(let j = 0 ; j < cantidadDePasos; j++){
        
            acumuladorPasos += pasos;
        
        }
        if(i%2 == 0){
         
            console.log(`Gato ${i+1}: 🐈 ${acumuladorPasos}`)
            
        }else{
            console.log(`Gato ${i+1}: 🐈🐈 ${acumuladorPasos}`)
        }
        
        acumuladorPasos = "";
    };
}