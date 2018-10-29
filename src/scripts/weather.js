// function that returns weather information for Nashville, 37205

// target weather result div
const weatherDiv = document.getElementById("weather-result")

// shows the result in weatherDiv
const showWeather = (weatherInfo) => {
    // console.log(weatherInfo)
    let weatherNow = "Current conditions: " + weatherInfo.main.temp + "&#176, " + weatherInfo.weather[0].description
    weatherDiv.innerHTML = weatherNow
}

// fetch call to OpenWeatherAPI
const searchWeather = () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?zip=37205,us&units=imperial&appid=d49085c89869f6ec158d05b5daeea45a")
    .then(result => {
        return result.json();
    })
    .then(result => {
        showWeather(result);
    })
}

// fire this function on pageload
window.onload(searchWeather())