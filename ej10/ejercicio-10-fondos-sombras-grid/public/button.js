let entrada = document.querySelector(".arriba");

let numeros = document.querySelectorAll(".numero");

let signo = document.querySelectorAll(".signo");

let decimal = document.querySelector(".decimal");

let total = document.querySelector(".total");

let abajo = document.querySelector(".abajo");

let display = document.getElementById("display");

let signoP = document.querySelectorAll(".signo p");

let signoDisplay = document.querySelector(".signo-display")



let numeroInicial = 0;
let signoElegido;
let segundoNumero = 0;
let resultado = null;
let tipoIngreso = 0;

//RESETEAR DISPLAY

function resetear (){
    entrada.textContent = 0;
    entrada.style.fontSize = "35px"
    abajo.textContent = "";
    signoDisplay.textContent = "";
    numeroInicial = 0;
    tipoIngreso = 0;
    resultado = null;
    segundoNumero = 0;
}

display.addEventListener("click", ()=>{
    resetear();
})
decimal.addEventListener("click",()=>{
    if(tipoIngreso ==0){
        if(entrada.textContent.length < 13){
            
            let acum = entrada.textContent;
            
            if(!(acum.charAt(acum.length-1) == ".")) {     

                if(entrada.textContent === 0 ){

                    entrada.textContent = "0.";
                    numeroInicial=entrada.textContent;

                }else{
                        
                    entrada.textContent = entrada.textContent + ".";
                        
                    numeroInicial = entrada.textContent;

                }
            }
        }else{

            alert("El maximo de caracteres permitido es 13");
            
        }
    }else{
        if(abajo.textContent.length < 13){
            
            let acum = abajo.textContent;
            
            if(!(acum.charAt(acum.length-1) == ".")) {   

                if(abajo.textContent == 0 && !(abajo.textContent == "0.")){

                    abajo.style.fontSize = "30px";
                    entrada.style.fontSize = "30px";
                    abajo.textContent = "0.";

                    segundoNumero = abajo.textContent;
                    
                }else{
                    abajo.style.fontSize = "30px"
                    entrada.style.fontSize = "30px"
                    abajo.textContent = abajo.textContent + ".";
                        
                    segundoNumero = abajo.textContent;
                
                }
            }
        }else{

            alert("El maximo de caracteres permitido es 13");
            
        }
    }
})
//INGRESO DE NUMEROS
for(let i = 0; i < numeros.length; i++){

    let contador=i+1;

    if(contador == 10){
        contador = 0;
    }

    numeros[i].addEventListener("click", ()=>{

        if(tipoIngreso == 0){


            if(entrada.textContent.length < 13){
                    
                if(entrada.textContent == 0 && !(entrada.textContent == "0.")){
                    entrada.textContent = contador;

                    numeroInicial=entrada.textContent;
                }else{
                        
                    entrada.textContent = entrada.textContent + contador;
                        
                    numeroInicial = entrada.textContent;

                }

            }
            else{

                alert("El maximo de caracteres permitido es 13");
                
            }
                    
        }
        else if(tipoIngreso == 1){
            if(abajo.textContent.length < 13){
                    
                if(segundoNumero == 0 && !(segundoNumero == "0.")){

                    abajo.style.fontSize = "30px"
                    entrada.style.fontSize = "30px"

                    abajo.textContent = contador;

                    segundoNumero = abajo.textContent;
                    
                }else{
                    abajo.style.fontSize = "30px"
                    entrada.style.fontSize = "30px"
                    abajo.textContent = abajo.textContent + contador;
                        
                    segundoNumero = abajo.textContent;
                   
                }
            }
            else{

                alert("El maximo de caracteres permitido es 13");
                
            }
        }

        
        
    })

}

//INGRESO DE BOTON

for(let j = 0; j < signo.length; j++){

    signo[j].addEventListener("click", ()=>{

        signoElegido = signoP[j].textContent;
        signoDisplay.textContent = signoElegido;
        tipoIngreso = 1;
        if(signoElegido == "x"){
            signoElegido = "*";
        }
    });

}


total.addEventListener("click", ()=>{
    if(signoElegido == "/" && segundoNumero == 0){
        reset();
        
        alert("No se puede dividir por cero");
    }
    else if(resultado == null){
        
        resultado = `${numeroInicial}${signoElegido}${segundoNumero}` ;
        resultado = eval(resultado);
        verificarResultado(resultado)
        entrada.textContent = resultado;
        entrada.style.fontSize = "35px";
        abajo.textContent = "";
        console.log(eval(resultado));
        signoDisplay.textContent = "";
    
    }
    else{
        resultado = `${resultado}${signoElegido}${segundoNumero}` ;
        resultado = eval(resultado);
        verificarResultado(resultado);
        entrada.textContent = resultado;
        entrada.style.fontSize = "35px";
        abajo.textContent = "";
        console.log(eval(resultado));
        signoDisplay.textContent = "";
    }
 
})

function verificarResultado( resultado){
    result = `${resultado}`
    if(result.length > 13){
        resetear();
    }
}

