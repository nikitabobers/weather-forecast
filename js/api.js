class Api {
  constructor(city, country) {
    this.apiKey = "8c88092407e92eadc1dd313b1e805290";
    this.city = city;
    this.country = country;
  }

  async getApi() {
    const response = await fetch(
      `https:api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
