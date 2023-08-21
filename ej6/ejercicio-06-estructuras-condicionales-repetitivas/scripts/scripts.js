console.log("-----------------------------\n"+
            "ejercicio1\n"+
            "-----------------------------")

let contador = 0;

let cantidadDeGatos = prompt("Ingrese cantidad de gatos");

for(i=0; i < cantidadDeGatos;i++){

    contador++;

    if(contador == 1){

        console.log(`Gato #${ i + 1 }: 😺`);

    }
    else if(contador == 2){

        console.log(`Gato #${ i + 1 }: 😸`);

    }else if(contador == 3){

        console.log(`Gato #${ i + 1 }: 😹`);
        
        contador = 0;

    }
}