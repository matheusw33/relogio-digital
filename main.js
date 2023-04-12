const hora = document.querySelector(".horas");
const minuto = document.querySelector(".minutos");
const segundo = document.querySelector(".segundos");

function mostraHora(){
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    hora.innerText = horas < 10 ? `0${horas}` : horas;
    minuto.innerText = minutos < 10 ? `0${minutos}` : minutos;
    segundo.innerText = segundos < 10 ? `0${segundos}`: segundos;
}

setInterval( () => {
    mostraHora()
},1000);