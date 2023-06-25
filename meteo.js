import data from './conf.json' assert { type: "json" };

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${data.apikey}&units=metric&lang=fr`

function getData() {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const temp = data.main.temp
            const feelsLike = data.main.feels_like
            const humidity = data.main.humidity
            const description = data.weather[0].description
            const city = data.name

            document.getElementById("temp").innerHTML = temp
            document.getElementById("feelsLike").innerHTML = feelsLike
            document.getElementById("humidity").innerHTML = humidity
            document.getElementById("description").innerHTML = description
            document.getElementById("city").innerHTML = city
            console.log("donees");
        })
}

getData()

setInterval(function () {
    getData()
}, 3600000);


