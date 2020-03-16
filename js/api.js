const myKey = config.MY_KEY;
class Api {
    constructor(city, country) {
        this.apiKey = myKey;
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
