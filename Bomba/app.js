const btn = document.getElementById("btn");
const tiempo = document.getElementById("tiempo");
const alerta = document.getElementById("alerta");
let cuentaRegresiva;

btn.addEventListener("click", inciarConteo);
function inciarConteo(){
    cuentaRegresiva=tiempo.value;
    btn.outerHTML=""
    tiempo.outerHTML=""
    alerta.textContent="La bomba se activara en 5 segundos, alejese!!"
    let timer = setTimeout(boom, 5000);
}

function boom(){
    let timer = setInterval(clock,1000);
}

function clock(){
alerta.textContent=`La bomba ha sido activada, se detonara en  ${cuentaRegresiva} segundos.`;
if (!cuentaRegresiva<1) {
cuentaRegresiva--;
}else{
    alerta.textContent="BOOOOOOOOMMMMMMM!!!"
    clearInterval(timer)
}
}