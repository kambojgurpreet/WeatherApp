//init OpenWeather
const getWeather = new OpenWeather();

//init UI
const ui = new UI();

//Search City
const search = document.querySelector('.searchCity');

//Add Event Listener
search.addEventListener('keyup', (event) =>{

    //Get Input
    const userText = event.target.value;

    //Make a Request to Open Weather API
    getWeather.search(userText).then(data => {
        //Temperature Conversion
        const celsius = data.main.temp - 273.15;
        const farenheit = celsius * 1.8 + 32;

        result = {
            condition: data.weather[0].main,
            icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
            degCel: Math.floor(celsius),
            degFr: Math.floor(farenheit),
            city: data.name
        }

        ui.showResults(result);

    });

})