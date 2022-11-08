const btn=document.getElementById("btn");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const resultado=document.getElementById("resultado");
let contador=0;
let mensaje=false;

btn.addEventListener("click", ()=>{
    contador++;
    resultado.innerText=contador;
    if(mensaje==false && contador>=50){
        alert("Usted llego a la mitad de los clicks.");
        mensaje=true;
    }
    if(contador>=100){
        resultado.innerText="Usted llego al final del juego por hacer 100 clicks."
    }
})
btn2.addEventListener("click", ()=>{
    contador+=5;
    resultado.innerText=contador;
    if(mensaje==false && contador>=50){
        alert("Usted llego a la mitad de los clicks.");
        mensaje=true;
    }
    if(contador>=100){
        resultado.innerText="Usted llego al final del juego por hacer 100 clicks."
    }
})
btn3.addEventListener("click", ()=>{
    contador=0;
    resultado.innerText=contador;
    mensaje=false;
})
