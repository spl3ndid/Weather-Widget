const apikey = "YOUR_API_KEY_HERE";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;
        const weatherImages = {
            Clouds: "images/clouds.png",
            Clear: "images/clear.png",
            Rain: "images/rain.png",
            Mist: "images/mist.png",
            Drizzle: "images/drizzle.png"
        };
        weathericon.src = weatherImages[weatherCondition] || "images/default.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

searchbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});
