import React from 'react';
import emptystar from '../images/star-empty.png';
import filledstar from '../images/star-filled.png';

export default function WeatherCardComponent(props) {
    const days =["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    const dateFull = new Date(props.forecastDay.date)
    const day = days[dateFull.getUTCDay()]
    const dateDay = dateFull.getDate()
    const dateMon = dateFull.getMonth()+1
    const [star, setStar] = React.useState(renderStar(emptystar));

    function renderStar(){
        /************************ TODO ************************
            render stars only if a user is selected
        */
   
    }

    function addFavourite() {
        /************************ TODO ************************
            send data to the backend to save a user's favourites to the database
            HINT: this function should run when a star is clicked
            HINT: remember to update the user's list of favourites in addition to adding the weather day to the database.
        */
    }
    
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <div>
                        <h5 className="card-title">{day}</h5>
                        <h5 className="card-title">{dateDay}/{dateMon}</h5>
                    </div>
                    {star}
                </div>
                <img src={props.forecastDay.icon} alt="icon"/>
                <div className="card-info">
                    <p>
                        Max: {props.forecastDay.maxTemp}°C
                        Min: {props.forecastDay.minTemp}°C
                        Rainfall: {props.forecastDay.rainfall}mm
                        Humidity: {props.forecastDay.humidity}%
                    </p>
                </div>
            </div>
        </div>
    )
}