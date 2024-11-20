


const base_url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key ='&appid=2a44318a88c074e4bdbd09721e9f08b6'

const h1 = document.getElementsByClassName('hh')
const input = document.querySelector('input')
const button = document.querySelector('button')
const h1CityName = document.querySelector('h1')
const h1CityNameSpan = document.querySelector('h1 span')
const h2_temp = document.querySelector('h2')
const h2_temp_span = document.querySelector('h2 span')
const img_icon = document.querySelector('img')
const p = document.querySelectorAll('p')

async function getWeather(city_name = 'Osh') {
    const response = await fetch(base_url + city_name + api_key)
    const city = await response.json()
    console.log(city);
    showWeather(city)
}

function showWeather(town){
    h1CityName.innerHTML = town.name + `<span>${town.sys.country}</span>`
    h2_temp.innerHTML = Math.round(town.main.temp - 273.15) + '<span>°C</span>'
    p[0].innerText = translateText(town.weather[0].main)
    p[1].innerText = "Ветер" + town.wind.speed + " км/ч"
    p[2].innerText = "Влажность" + town.main.humidity + "%"
    img_icon.src="https://openweathermap.org/img/wn/" + town.weather[0].icon + "@4x.png"
}

getWeather()

function translateText(text){
    switch(text){
        case "Clouds" : return "Облачно"
        default : return "не известно" + text
    }
}

button.onclick = () => getWeather(input.value)