const searchBox = document.getElementById('searchBox');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const openSearch = document.getElementById('openSearch');
const notFoundMess = document.getElementById('notFoundMess');

const location = document.getElementById('location');
const country = document.getElementById('country');
const weatherInfo = document.getElementById('weatherInfo');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const feelsLikeTemp = document.getElementById('feelsLikeTemp');
const windSpeed = document.getElementById('windSpeed');
const windDirect = document.getElementById('windDirect');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');


function getWeather(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            searchBox.style.transition = '.5s';
            searchBox.style.top = '-100%';
            showWeatherUi(data);
            searchInput.style.borderColor = '';
        })
        .catch(() => {
            searchInput.style.borderColor = 'red';
            notFoundMess.style.opacity = '1';
        });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = searchInput.value.trim();
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb`;
    getWeather(BASE_URL);
    searchInput.value = '';
});

function showWeatherUi(data) {
    location.textContent = data.name;
    country.textContent = data.sys.country;
    weatherInfo.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    feelsLikeTemp.textContent = `${Math.round(data.main.feels_like - 273.15)}°C`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    windDirect.textContent = `${data.wind.deg}°`;
    humidity.textContent = `${data.main.humidity}%`;
    pressure.textContent = `${data.main.pressure} hPa`;
    sunrise.textContent = new Date(data.sys.sunrise * 1000).getHours() + ':' + new Date(data.sys.sunrise * 1000).getMinutes();
    sunset.textContent = new Date(data.sys.sunset * 1000).getHours() + ':' + new Date(data.sys.sunset * 1000).getMinutes();
}


openSearch.addEventListener('click', () => {
    searchBox.style.transition = 'top 0.5s ease-in-out';
    searchBox.style.top = '0';
});
