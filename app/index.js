<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="card">
        <div class="search">
            <input type="text" placeholder="Enter city name" spellcheck="false" aria-label="City name">
            <button aria-label="Search"><img src="images/search.png" alt="Search"></button>
        </div>
        <div class="error">
            <p>Invalid City Name</p>
        </div>
        <div class="weather">
            <img src="images/rain.png" class="weather-icon" alt="Weather icon">
            <h1 class="temp">22°C</h1>
            <h2 class="city">New York</h2>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png" alt="Humidity icon">
                    <div>
                        <p class="humidity">50%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png" alt="Wind icon">
                    <div>
                        <p class="wind">15 km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="logic.js"></script>
</body>

</html>
