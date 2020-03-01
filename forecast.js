class Forecast{
    constructor(){
        this.key =  "Yq6sYIYGBqc0S0CUARlU9NOIpeJooLD3";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    };
    async updateCity(city){
        let CityData = await this.getCity(city);
        let WeatherData = await this.getWeather(CityData.Key);
        return {
            CityData:CityData,
            WeatherData:WeatherData
            };
    };
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI+query);
        const data = await response.json();
        return data[0];
    };
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI+query);
        const data = await response.json();
        return data[0];
    };
}