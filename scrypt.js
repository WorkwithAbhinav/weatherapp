const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "&appid=897ed6fe7a903b56a865b914d8cf85e6&units=metric"; // Added '&' before 'appid'
const temp = document.querySelector(".temp");
const city_name = document.querySelector(".city-name");
const first_text = document.querySelector(".first-text"); // Corrected class name
const first_btn = document.querySelector(".first-btn");
const img = document.querySelector(".second img");
const humidity_h = document.querySelector(".humidity-h");
const wind_h = document.querySelector(".wind-h");

async function checkweather(place) {
  const response1 = await fetch(URL + place + apikey); // Concatenated apikey directly
  var data = await response1.json();

  console.log(data);

  temp.innerHTML = parseInt(data.main.temp) + "℃";
  city_name.innerHTML = data.name;
  humidity_h.innerHTML = data.main.humidity + " %";
  wind_h.innerHTML = data.wind.speed + " KM/H";

  if (data.weather[0].main == "Clouds") {
    img.setAttribute("src", "images/clouds.png");
  } else if (data.weather[0].main == "Drizzle") {
    img.setAttribute("src", "images/drizzle.png");
  } else if (data.weather[0].main == "Rain") {
    img.setAttribute("src", "images/rain.png");
  } else if (data.weather[0].main == "Clear") {
    img.setAttribute("src", "images/clear.png");
  } else if (data.weather[0].main == "Mist") {
    img.setAttribute("src", "images/mist.png");
  }
  
}

first_btn.addEventListener("click", () => {
  console.log("click");
  checkweather(first_text.value);
});

first_text.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Use event.key to check for the Enter key
    console.log("Enter key pressed!");
    checkweather(first_text.value);
  }
});
