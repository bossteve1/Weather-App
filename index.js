const apiKey = 'ed073be48ab9f72b4a7aad430b248120';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=nairobi'

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data)
}
checkWeather()