class OpenWeather {

    constructor(){
        this.apikey = 'a629ed80d823322d2cd94d7ce61a7986';
    }

    async search(cityName){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);
        const result = await response.json();
        return result;
    }

}