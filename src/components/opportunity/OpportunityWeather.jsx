import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/OpportunityWeather.css";

function OpportunityWeather(props) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const eventDate = props.eventDate.split("T")[0];

        axios
            .get(
                `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&start_date=${eventDate}&end_date=${eventDate}`
            )
            .then((response) => {
                setWeather(response.data.daily);
                setError("");
            })
            .catch((error) => {
                console.log(error);
                setError("Weather forecast is not available yet.");
            });

    }, [props.latitude, props.longitude, props.eventDate]);

    if (error) {
        return (
            <div className="eventcrew-opportunity-weather">
                <h2>Weather Forecast</h2>
                <p>{error}</p>
            </div>
        );
    }

    if (!weather) {
        return null;
    }

    return (
        <div className="eventcrew-opportunity-weather">

            <h2>Weather Forecast</h2>

            <div className="eventcrew-weather-content">

                <div>
                    <span>Maximum Temperature</span>
                    <h3>{weather.temperature_2m_max[0]} °C</h3>
                </div>

                <div>
                    <span>Minimum Temperature</span>
                    <h3>{weather.temperature_2m_min[0]} °C</h3>
                </div>

                <div>
                    <span>Chance of Rain</span>
                    <h3>{weather.precipitation_probability_max[0]}%</h3>
                </div>

            </div>

        </div>
    );
}

export default OpportunityWeather;