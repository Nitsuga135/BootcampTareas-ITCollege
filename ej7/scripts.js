
document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {

        let button1 = document.querySelector(".button1");
        let button2 = document.querySelector(".button2");
        let button3 = document.querySelector(".button3");
        let div = document.querySelector("div")

        let contador = 0;
        let ultimoEmoji = "";

        let button1Emoji = "😺";
        let button2Emoji = "😸";
        let button3Emoji = "😹";
        let caja = "⬛";

        button1.addEventListener("click", function(){

            if(ultimoEmoji != button1Emoji){
                
                div.textContent = div.textContent + button1Emoji ;
                contador=1;
                ultimoEmoji = button1Emoji;

            }else{

                div.textContent += button1Emoji;
                contador ++;
                if(contador == 5 ){
                    
                    contador = 0;
                    let acum = div.textContent.slice(0, div.textContent.length-10);
                    div.textContent = acum;
                    div.textContent = caja + div.textContent
                }
            }


        })
        button2.addEventListener("click", function(){

            if(ultimoEmoji != button2Emoji){
                
                div.textContent = div.textContent + button2Emoji ;
                contador=1;
                ultimoEmoji = button2Emoji;

            }else{

                div.textContent += button2Emoji;
                contador ++;
                if(contador == 5 ){
                    
                    contador = 0;
                    let acum = div.textContent.slice(0, div.textContent.length-10);
                    div.textContent = acum;
                    div.textContent = caja + div.textContent
                }
            }


        })
        button3.addEventListener("click", function(){

            if(ultimoEmoji != button3Emoji){
                
                div.textContent = div.textContent + button3Emoji ;
                contador=1;
                ultimoEmoji = button3Emoji;

            }else{

                div.textContent += button3Emoji;
                contador ++;
                if(contador == 5 ){
                    
                    contador = 0;
                    let acum = div.textContent.slice(0, div.textContent.length-10);
                    div.textContent = acum;
                    div.textContent = caja + div.textContent
                }
            }


        })
       


    })
})