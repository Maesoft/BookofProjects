// Codigo de la pagina de Inicio
const btnInicio = document.getElementById("btnInicio") as HTMLAnchorElement;
const txtInicio = document.getElementById("txtInicio") as HTMLParagraphElement;
const divInicio = document.getElementById("divInicio") as HTMLDivElement;
const shortMsg : string= "Bienvenido a Coca-Cola Argentina, este es el sitio donde encontraras toda la informacion de la bebida mas deliciosa del planeta. Aqui te contaremos desde como la hacemos hasta como la distribuimos. Y si te interesa podras trabajar con nosotros." 
const longMsg : string= "Bienvenido a Coca-Cola Argentina, este es el sitio donde encontraras toda la informacion de la bebida mas deliciosa del planeta. Aqui te contaremos desde como la hacemos hasta como la distribuimos. Y si te interesa podras trabajar con nosotros. En 1886, en una farmacia de nombre Jacobs, en Atlanta , Georgia, comenzó la historia de la bebida más famosa del mundo, gracias al famacéutico John S. Pemberton, quien trabajaba con la fórmula de un principio medicinal a base de jarabe (aún secreto) y agua natural conocido como Vino Coca Pemberton El creativo farmacéutico siguió cambiando la fórmula, experimentando con nuevos sabores para mejorar aún las cualidades del jarabe, hasta ese mismo año, cuando el 8 de mayo, accidentalmente mezcló el jarabe con agua carbonatada y resultó ser todo un éxito, el sabor era delicioso y realmente refrescaba. Así fue el afortunado nacimiento de la bebida más famosa del mundo: Coca-Cola." 

btnInicio?.addEventListener("click", ()=>{
    
    if (btnInicio.textContent=="Ver Mas"){
            txtInicio.innerText=longMsg;
            divInicio.classList.toggle("amplio");
            btnInicio.textContent="Ver Menos";
        }else{
            txtInicio.innerText=shortMsg;
            divInicio.classList.toggle("amplio");
            btnInicio.textContent="Ver Mas";
        }
})



