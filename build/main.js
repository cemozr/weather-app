"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const key = "c0c046a932a1434da17103152233107";
const url = "http://api.weatherapi.com/v1";
const searchBar = document.getElementById("search-bar");
const searchBtn = document.querySelector(".search-btn");
const cityNameText = document.querySelector(".city-name");
const degree = document.querySelector(".degree");
const icoImg = document.getElementById("image");
const feelsLike = document.querySelector(".feels-like");
const weatherCondition = (document.querySelector(".weather-condition"));
let cityValue;
let getCity = (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        getWeather(searchBar.value);
        console.log(searchBar.value);
    }
};
document.addEventListener("keypress", getCity);
// searchBtn?.addEventListener("click", getCity);
let getWeather = (cityName) => __awaiter(void 0, void 0, void 0, function* () {
    let query = `${url}/current.json?key=${key}&q=${cityName}&lang=tr `;
    let weather = yield fetch(query);
    const w = yield weather.json();
    cityNameText.innerText = cityName.toUpperCase();
    icoImg === null || icoImg === void 0 ? void 0 : icoImg.setAttribute("src", `${w.current.condition.icon}`);
    degree.innerText = "Sıcaklık: " + w.current.temp_c + "°C";
    feelsLike.innerText = "Hissedilen Sıcaklık: " + w.current.feelslike_c + "°C";
    weatherCondition.innerText = w.current.condition.text;
});
