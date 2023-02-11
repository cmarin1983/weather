
import { weather_data } from './data.js';

let loadDayForecastData = () => {
	let { city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, ...others } = weather_data[0];

    document.getElementById('city').innerText = city;
    document.getElementById('date').innerText = date;
    document.getElementById('maxtemperature').innerText = maxtemperature;
    document.getElementById('mintemperature').innerText = mintemperature;
    document.getElementById('cloudiness').innerText = cloudiness;
    document.getElementById('wind').innerText = wind;
    document.getElementById('rainfall').innerText = rainfall;

    /*document.getElementById('late_icon').innerText = others.forecast_today[0].icon;
    document.getElementById('late_temperature').innerText = others.forecast_today[0].temperature;
    document.getElementById('late_tarde').innerText = others.forecast_today[0].tarde;
    document.getElementById('late_forecast').innerText = others.forecast_today[0].forecast;

    document.getElementById('late_icon').innerText = others.forecast_today[0].icon;
    document.getElementById('late_temperature').innerText = others.forecast_today[0].temperature;
    document.getElementById('late_tarde').innerText = others.forecast_today[0].tarde;
    document.getElementById('late_forecast').innerText = others.forecast_today[0].forecast;
*/
    for(let elemet of others.forecast_today)
    {
        let forecast = elemet.lapse + '_forecast';
        let icon = elemet.lapse + '_icon';
        let text = elemet.lapse + '_text';
        let temperature = elemet.lapse + '_temperature';
        document.getElementById(forecast).innerText = elemet.forecast;
        document.getElementById(icon).innerText = elemet.icon;
        
    }

}

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();