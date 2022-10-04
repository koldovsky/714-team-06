(function () { 
const button = document.querySelector('.weather_button');
const input = document.querySelector('.weather_city');
const name = document.querySelector('.weather-display__city');
const descr = document.querySelector('.weather-city__descr');
const temperature = document.querySelector('.weather-city__temp');
const wind = document.querySelector('.weather-city__wind');

async function weatherForecast() {
    try { const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a35953c9f49cb5cf86a0efcde9ee418c');
    let weather = await response.json();

    name.innerHTML = "City: " + weather['name'];
    descr.innerHTML = "Sky: " + weather['weather'][0]['description'];
    temperature.innerHTML = "Temperature: " + Math.round((weather['main']['temp'] - 273.15)) + "°C";
    wind.innerHTML = "Wind: " + weather['wind']['speed'] + " m/s";
    } catch (err) {
        alert("There is no such city name");
        name.innerHTML = " ";
        descr.innerHTML = "Please try again ";
        temperature.innerHTML = " ";
        wind.innerHTML = " ";
    }
}
button.addEventListener('click', weatherForecast);
})();