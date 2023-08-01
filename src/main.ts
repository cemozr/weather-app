const key: string = "c0c046a932a1434da17103152233107";
const url: string = "http://api.weatherapi.com/v1";
const searchBar = <HTMLInputElement>document.getElementById("search-bar");
const searchBtn = <HTMLInputElement>document.querySelector(".search-btn");
const cityNameText = <HTMLInputElement>document.querySelector(".city-name");
const degree = <HTMLInputElement>document.querySelector(".degree");
const icoImg = document.getElementById("image");
const feelsLike = <HTMLInputElement>document.querySelector(".feels-like");
const weatherCondition = <HTMLInputElement>(
  document.querySelector(".weather-condition")
);
let cityValue: string;

let getCity = (e: KeyboardEvent) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    getWeather(searchBar.value);
    console.log(searchBar.value);
  }
};

document.addEventListener("keypress", getCity);

// searchBtn?.addEventListener("click", getCity);

let getWeather = async (cityName: string) => {
  let query = `${url}/current.json?key=${key}&q=${cityName}&lang=tr `;
  let weather = await fetch(query);
  const w = await weather.json();
  cityNameText.innerText = cityName.toUpperCase();
  icoImg?.setAttribute("src", `${w.current.condition.icon}`);
  degree.innerText = "Sıcaklık: " + w.current.temp_c + "°C";
  feelsLike.innerText = "Hissedilen Sıcaklık: " + w.current.feelslike_c + "°C";
  weatherCondition.innerText = w.current.condition.text;
};
