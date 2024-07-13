const apiKey = 'ed073be48ab9f72b4a7aad430b248120';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
    


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/weather-icons/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/weather-icons/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/weather-icons/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/weather-icons/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/weather-icons/mist.png'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

