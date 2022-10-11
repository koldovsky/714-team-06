(function () {
    const countdown = () => {
        const countDate = new Date("October 28, 2022 00:00:00").getTime();
        const currentTime = new Date().getTime();
        const gap = countDate - currentTime;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const countDay = Math.floor(gap / day);
        const countHour = Math.floor((gap % day) / hour);
        const countMinute = Math.floor((gap % hour) / minute);
        const countSecond = Math.floor((gap % minute) / second);

        document.getElementById('promotion-countdown__day').innerText = countDay;
        document.getElementById('promotion-countdown__hour').innerText = countHour;
        document.getElementById('promotion-countdown__minute').innerText = countMinute;
        document.getElementById('promotion-countdown__second').innerText = countSecond;

        if (gap < 1000) {
            document.getElementById('promotion-countdown__day').innerText = "0";
            document.getElementById('promotion-countdown__hour').innerText = "0";
            document.getElementById('promotion-countdown__minute').innerText = "0";
            document.getElementById('promotion-countdown__second').innerText = "0";
        }
    }

    setInterval(countdown, 1000);
})();