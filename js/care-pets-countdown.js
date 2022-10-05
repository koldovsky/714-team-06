(function () {
    const countdown = () => {
        const countDate = new Date("November 20, 2022 00:00:00").getTime();
        const curentTime = new Date().getTime();
        const gap = countDate - curentTime;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const countDay = Math.floor(gap / day);
        const countHour = Math.floor((gap % day) / hour);
        const countMinute = Math.floor((gap % hour) / minute);
        const countSecond = Math.floor((gap % minute) / second);

        document.getElementById('body__countdown-day').innerText = countDay;
        document.getElementById('body__countdown-hours').innerText = countHour;
        document.getElementById('body__countdown-minutes').innerText = countMinute;
        document.getElementById('body__countdown-seconds').innerText = countSecond;

        if (gap < 1000) {
            document.getElementById('body__countdown-day').innerText = "0";
            document.getElementById('body__countdown-hours').innerText = "0";
            document.getElementById('body__countdown-minutes').innerText = "0";
            document.getElementById('body__countdown-seconds').innerText = "0";
        }
    }
    setInterval(countdown, 1000);
})();