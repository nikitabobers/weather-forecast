class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.windSpeed = document.getElementById("w-wind-speed");
    this.clouds = document.getElementById("w-clouds");
  }

  paint(api) {
    const iconSrc = "http://openweathermap.org/img/wn/" + api.weather["0"].icon + "@2x.png";

    this.location.textContent = api.name;
    this.desc.textContent = api.weather["0"].description;
    this.string.textContent = api.main.temp + " °C";
    this.icon.setAttribute("src", iconSrc);
    this.humidity.textContent = `Relative Humidity: ${api.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${api.main.feels_like} °C`;
    this.windSpeed.textContent = `Wind: ${api.wind.speed} m/s`;
    this.clouds.textContent = `Wind Direction: ${api.clouds.all} %`;
  }
}
