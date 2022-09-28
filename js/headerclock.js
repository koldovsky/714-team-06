const clockHeader = document.querySelector('.clockdate__clock')
function nextTimeClock() {
    clockHeader.innerText = new Date().toLocaleTimeString();
}
setInterval(nextTimeClock, 1000); 

const dateHeader = document.querySelector('.clockdate__date')
function nextDateCounter() {
    dateHeader.innerText = new Date().toLocaleDateString();
}
setInterval(nextDateCounter, 1000);