window.onload = () => {
  
    let textArea = document.getElementById("origen");

    textArea.textContent = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

    let vaciar =document.querySelector(".btn-vaciar");
    let mayusc = document.querySelector(".btn-convertir-a-mayusculas");
    let minusc = document.querySelector("button");

    /*4*/
    let inputs = document.querySelectorAll(".btn-agregar");
    let inputFaltante = document.getElementById("btn-reemplazar");

    textArea.addEventListener("input", (e)=>{

        if(e != ""){
            
            inputFaltante.disabled = false; 

            for(i=0; i < inputs.length; i++){
                inputs[i].disabled = false;
            }
        }else{
            inputFaltante.disabled = true; 

            for(i=0; i < inputs.length; i++){
                inputs[i].disabled = true;
            }
        }




    })


    //5

    let escribir = document.getElementById("destino");

    inputFaltante.addEventListener("click",()=>{

        escribir.textContent = textArea.value ;

        vaciar.disabled=false;
        mayusc.disabled=false;
        minusc.disabled=false;
        
        
    })
    inputs[0].addEventListener("click", ()=>{
        escribir.textContent = escribir.textContent + textArea.value ;
        vaciar.disabled=false;
        mayusc.disabled=false;
        minusc.disabled=false;
    })
    inputs[1].addEventListener("click", ()=>{
        for(i=0; i< 5 ; i++){
            
        escribir.textContent = escribir.textContent + textArea.value ;
        vaciar.disabled=false;
        mayusc.disabled=false;
        minusc.disabled=false;
        }
    })
    inputs[2].addEventListener("click", ()=>{
        for(i=0; i< 10 ; i++){
            
        escribir.textContent = escribir.textContent + textArea.value ;
        vaciar.disabled=false;
        mayusc.disabled=false;
        minusc.disabled=false;
        }
    })
    inputs[3].addEventListener("click", ()=>{
        
        let ingresoValor = parseInt(prompt("Ingrese valor"));
        
        for(i=0; i< ingresoValor ; i++){
            
        escribir.textContent = escribir.textContent + textArea.value ;
        }
        vaciar.disabled=false;
        mayusc.disabled=false;
        minusc.disabled=false;
    })


    //6
    vaciar.addEventListener("click", ()=>{
        escribir.textContent = "";
    })
    mayusc.addEventListener("click", ()=>{
       
        
        escribir.textContent = escribir.textContent.toUpperCase()
    })

    minusc.addEventListener("click", ()=>{
        escribir.textContent = escribir.textContent.toLowerCase();
    })
    let lis = document.querySelectorAll("li");
    for(i=0; i<lis.length;i++){
        lis[i].textContent = "[OK]" +lis[i].textContent;
    }


};