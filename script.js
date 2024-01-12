const apiKey = 'd0a979a2edb6e78d112d56c00273b0b0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
       
        var data = await response.json();

    console.log(data)
        let tempe = Math.round(data.main.temp) + '°C'
    
        document.querySelector('.city').innerHTML = `${data.name}`
        document.querySelector('.temp').innerHTML = `${tempe}`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'cloud.png'
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'clear.jpg'
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'rain.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'mist.png'
        }
    
        document.querySelector('.weather').style.display = 'block';

        document.querySelector('.error').style.display = 'none';
    }



}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)

})

document.addEventListener('keyup', (e) => {
    if(e = 400){
        checkWeather(searchBox.value)
    }
    else{
        e.disabled= true
    }
})