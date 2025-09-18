# WeatherApp

A simple web application that displays weather information for a given location. Built using HTML, CSS (Materialize), and JavaScript.

## Features
- Search for current weather by city name
- Displays temperature, weather conditions, humidity, and more
- Responsive design using Materialize CSS framework
- Clean and modern UI

## Project Structure
```
WeatherApp/
│
├── index.html                # Main HTML file
├── css/
│   ├── materialize.css       # Materialize CSS (unminified)
│   ├── materialize.min.css   # Materialize CSS (minified)
│   └── style.css             # Custom styles
├── img/
│   └── bg.jpg                # Background image
├── js/
│   ├── api.js                # Handles API requests
│   ├── app.js                # Main application logic
│   ├── init.js               # Initialization scripts
│   ├── materialize.js        # Materialize JS (unminified)
│   ├── materialize.min.js    # Materialize JS (minified)
│   └── ui.js                 # UI rendering logic
```

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Enter a city name to view the current weather.

## Dependencies
- [Materialize CSS](https://materializecss.com/) (included locally)
- Weather API (see `js/api.js` for details)

## Customization
- Update API key and endpoint in `js/api.js` as needed.
- Modify `css/style.css` for custom styles.

## Screenshots
![WeatherApp Screenshot](img/bg.jpg)

## License
This project is licensed under the MIT License.
