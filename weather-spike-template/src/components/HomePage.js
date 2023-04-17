import React from 'react'
import WeatherCardComponent from './WeatherCardComponent'
import axios from 'axios'
import UserPage from "./UserPage"
import "../CSS/WeatherCardComponent.css"

export default function HomePage(props){
    // Creates Elements to display forecast of past 7 days
    const [forecastDays, setForecastDays] = React.useState([]);
    
    const weatherCardElements = forecastDays.map(day =>
        <div className='weather-column'>
            <WeatherCardComponent forecastDay={day} currentUser={props.currentUser}/>
        </div>
    )

    /************************ TODO ************************
            Effect that retrieves weather forcast and stores
            in the forcastDays state.
    */
   
    return (
        <span className='content-section'>
                <div className='weather-section'>
                    <div className='forecast'>
                        <div>
                            <h3>Weekly Forecast</h3>
                            <div className="weekly-forecast-body">
                                {weatherCardElements}
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </span>
    )
}