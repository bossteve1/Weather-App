const apiKey = 'ed073be48ab9f72b4a7aad430b248120';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=kazakhstan'

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
}

checkWeather()