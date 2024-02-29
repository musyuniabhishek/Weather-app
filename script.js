const apikey = "38b42df1506e4ccead1110329230706"
const apiurl = "http://api.weatherapi.com/v1/current.json?"

const search = document.getElementById("search")
const btn = document.getElementById("btn")
const icon = document.querySelector(".weather-icon")
const main = document.querySelector("body")

async function checkweather(city) {


    const response = await fetch(apiurl + `key=${apikey}` + `&q= ${city}`)



    if(response.status == 400) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {

        var data = await response.json()



        document.querySelector(".city").innerHTML = data.location.name
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C"
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%"
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h"

        if(data.current.condition.text == "Overcast" || data.current.condition.text == "Partly cloudy") {
            icon.src = "images/clouds.png"
            main.style.backgroundImage = "url('images/clouds.jpg')"

        }
        else if(data.current.condition.text == "Sunny") {
            icon.src = "images/clear.png"
            main.style.backgroundImage = "url('images/clear.jpg')"
        }
        else if(data.current.condition.text == "Rain") {
            icon.src = "images/rain.png"
            main.style.backgroundImage = "url('images/rainy.jpg')"
        }
        else if(data.current.condition.text == "Drizzle") {
            icon.src = "images/drizzle.png"
            main.style.backgroundImage = "url('images/drizzle.jpg')"
        }
        else if(data.current.condition.text == "Mist") {
            icon.src = "images/mist.png"
            main.style.backgroundImage = "url('images/mist.jpg')"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}


btn.addEventListener("click", () => {
    checkweather(search.value)
})

window.addEventListener("load", () => {
    checkweather("india")
});
