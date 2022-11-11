let  cantidad = prompt("Ingrese la cantidad de botones a crear.");
const contenedor = document.getElementById("contenedor");
const btnDelete = document.getElementById("delete");
for (let i = 0; i < cantidad; i++) {
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.innerText = `Boton ${i+1}`; 
    contenedor.appendChild(button); 
}
btnDelete.addEventListener("click",(e)=>{contenedor.outerHTML=""})
contenedor.addEventListener("click",(e)=>{if(e.target.type=="button"){alert(e.target.innerText)};})