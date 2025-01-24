/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("const searchBox = document.getElementById('searchBox');\r\nconst searchForm = document.getElementById('searchForm');\r\nconst searchInput = document.getElementById('searchInput');\r\nconst openSearch = document.getElementById('openSearch');\r\nconst notFoundMess = document.getElementById('notFoundMess');\r\n\r\nconst location = document.getElementById('location');\r\nconst country = document.getElementById('country');\r\nconst weatherInfo = document.getElementById('weatherInfo');\r\nconst weatherIcon = document.getElementById('weatherIcon');\r\nconst temperature = document.getElementById('temperature');\r\nconst feelsLikeTemp = document.getElementById('feelsLikeTemp');\r\nconst windSpeed = document.getElementById('windSpeed');\r\nconst windDirect = document.getElementById('windDirect');\r\nconst humidity = document.getElementById('humidity');\r\nconst pressure = document.getElementById('pressure');\r\nconst sunrise = document.getElementById('sunrise');\r\nconst sunset = document.getElementById('sunset');\r\n\r\n\r\nfunction getWeather(url) {\r\n    fetch(url)\r\n        .then((res) => res.json())\r\n        .then((data) => {\r\n            searchBox.style.transition = '.5s';\r\n            searchBox.style.top = '-100%';\r\n            showWeatherUi(data);\r\n            searchInput.style.borderColor = '';\r\n        })\r\n        .catch(() => {\r\n            searchInput.style.borderColor = 'red';\r\n            notFoundMess.style.opacity = '1';\r\n        });\r\n}\r\n\r\nsearchForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const cityName = searchInput.value.trim();\r\n    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb`;\r\n    getWeather(BASE_URL);\r\n    searchInput.value = '';\r\n});\r\n\r\nfunction showWeatherUi(data) {\r\n    location.textContent = data.name;\r\n    country.textContent = data.sys.country;\r\n    weatherInfo.textContent = data.weather[0].description;\r\n    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;\r\n    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;\r\n    feelsLikeTemp.textContent = `${Math.round(data.main.feels_like - 273.15)}°C`;\r\n    windSpeed.textContent = `${data.wind.speed} m/s`;\r\n    windDirect.textContent = `${data.wind.deg}°`;\r\n    humidity.textContent = `${data.main.humidity}%`;\r\n    pressure.textContent = `${data.main.pressure} hPa`;\r\n    sunrise.textContent = new Date(data.sys.sunrise * 1000).getHours() + ':' + new Date(data.sys.sunrise * 1000).getMinutes();\r\n    sunset.textContent = new Date(data.sys.sunset * 1000).getHours() + ':' + new Date(data.sys.sunset * 1000).getMinutes();\r\n}\r\n\r\n\r\nopenSearch.addEventListener('click', () => {\r\n    searchBox.style.transition = 'top 0.5s ease-in-out';\r\n    searchBox.style.top = '0';\r\n});\r\n\n\n//# sourceURL=webpack://weather/./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;