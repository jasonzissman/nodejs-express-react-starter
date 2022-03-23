'use strict';


class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentWeather: "rainy",
            cityName: "Any Town USA",
            currentTemperature: 72,
            temperatureMode: "F",
            weatherIcon: "10d"
        };

        // 1. Get current location
        
        navigator.geolocation.getCurrentPosition((position) => {
            // position.coords.latitude
            // position.coords.longitude

            // 2. Fetch weathert info
            let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=ce309858c9580a2f86ac0e0f45374afb`

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", weatherApiUrl, false );
            xmlHttp.onreadystatechange = () => { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    const weatherResponse = JSON.parse(xmlHttp.responseText)

                    // 3. Update state
                    this.setState({
                        currentWeather: weatherResponse.weather[0].main,
                        weatherIcon: weatherResponse.weather[0].icon,
                        cityName: weatherResponse.name,
                        currentTemperature: weatherResponse.main.temp,
                        temperatureMode: "F" // TODO - circle back
                    })
                }
            }
                    
            
            xmlHttp.send( null );
            return xmlHttp.responseText;


        }, (err) => {})
    

    }

    render() {

        let temp = 0
        if (this.state.temperatureMode === "F") { 
            temp = 32 + (this.state.currentTemperature - 273.15) * 9 / 5
        } else {
            temp = this.state.currentTemperature - 273.15; 
        }


        return (
            <div>
                <img src={`http://openweathermap.org/img/wn/${ this.state.weatherIcon }@2x.png`} />
                Current Weather: { this.state.currentWeather}<br/>
                City: { this.state.cityName }<br/>
                Current Temperature: { temp }<br/>
                Mode: { this.state.temperatureMode }<br/>
            </div>
        );

    }
}

const domContainer = document.querySelector('#react_component_container');
ReactDOM.render(<RootComponent />, domContainer);
