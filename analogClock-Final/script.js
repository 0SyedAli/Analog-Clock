const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

function setClock() {
    const getDate = new Date();
    let s = getDate.getSeconds() / 60;
    let m = (s + getDate.getMinutes()) / 60;
    let h = (m + getDate.getHours()) / 12;
    setRotation(hour, h);
    setRotation(min, m);
    setRotation(sec, s);
}
function setRotation(element, rotationNidle) {
    element.style.setProperty('--rotation', rotationNidle * 360)
}
setInterval(setClock, 1000);