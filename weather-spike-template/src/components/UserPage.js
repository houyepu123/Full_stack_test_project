import React from 'react';
import WeatherCardComponent from './WeatherCardComponent';
import axios from 'axios';

export default function UserPage(props){
    const [forecastDays, setForecastDays] = React.useState([]);
    const [username, setUsername] = React.useState("");

    const weatherCardElements = forecastDays.map(day =>
        <div className='weather-column'>
            <WeatherCardComponent forecastDay={day} currentUser={props.user}/>
        </div>
    );


    /************************ TODO ************************
            Effect that retrieves weather forcast and stores
            in the forcastDays state.
    */

    /************************ TODO ************************
            Effect that retrieves the current user and stores
            their name in the username state.
    */


    return (
        <span className='content-section'>
            <div className='weather-section'>
                <div className='fav-weather'>
                    <h3>{`Hi, ${username}`}</h3>
                </div>
                <div className='forecast'>
                    <h3>Weekly Forecast</h3>
                    <div className='weekly-forecast-body'>{weatherCardElements}</div>
                </div>
        </div>
    </span>
    )

}