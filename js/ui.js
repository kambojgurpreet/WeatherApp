class UI {

    constructor(){
        this.display = document.getElementById('display');
    }

    showResults(result){

        let output = `
        
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br><br>
                <h1 class="header center teal-text darken-4">${result.city}&nbspWeather</h1>
                <div class="row center">
                <p><b>${result.condition}</b></p>
                    <img src="${result.icon}" width="100" height="100">
                </div>
                <div class="row center">
                    <p class="flow-text">${result.degCel}\u00B0 C / ${result.degFr}\u00B0 F</p>
                </div>
                <br><br>
            </div>
        </div>

        `;

        this.display.innerHTML = output;

    }

}