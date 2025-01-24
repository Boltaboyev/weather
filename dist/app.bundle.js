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

eval("const searchBox = document.getElementById('searchBox');\r\nconst searchForm = document.getElementById('searchForm');\r\nconst openSearch = document.getElementById('openSearch');\r\n\r\n// ---\r\nconst location = document.getElementById('location');\r\nconst country = document.getElementById('country');\r\nconst weatherInfo = document.getElementById('weatherInfo');\r\nconst weatherIcon = document.getElementById('weatherIcon');\r\nconst temperature = document.getElementById('temperature');\r\nconst feelsLikeTemp = document.getElementById('feelsLikeTemp');\r\nconst windSpeed = document.getElementById('windSpeed');\r\nconst windDirect = document.getElementById('windDirect');\r\nconst humidity = document.getElementById('humidity');\r\nconst pressure = document.getElementById('pressure');\r\nconst sunrise = document.getElementById('sunrise');\r\nconst sunset = document.getElementById('sunset');\r\n\r\n\r\n\r\nlet BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=chirchiq&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb';\r\n\r\nfunction getWeather() {\r\n    fetch(BASE_URL)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            console.log(data);\r\n            location.innerHTML = data.name;\r\n            country.innerHTML = data.sys.country;\r\n            weatherInfo.innerHTML = data.weather[0].description;\r\n            temperature.innerHTML = Math.round(data.main.temp - 273) + '°C';\r\n            feelsLikeTemp.innerHTML = Math.round(data.main.feels_like - 273) + '°C';\r\n            windSpeed.innerHTML = data.wind.speed + ' m/s';\r\n            windDirect.innerHTML = data.wind.deg + '°';\r\n            humidity.innerHTML = data.main.humidity + '%';\r\n            pressure.innerHTML = data.main.pressure + ' hPa';\r\n            sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();\r\n            sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();\r\n        })\r\n        .catch(err => console.log(err));\r\n}\r\n\r\ngetWeather();\r\n\r\nsearchForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb`;\r\n    getWeather();\r\n    searchBox.value = '';\r\n});\n\n//# sourceURL=webpack://weather/./js/app.js?");

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