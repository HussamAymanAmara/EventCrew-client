import { useEffect } from "react";
import "./CSS/OpportunityMap.css";

function OpportunityMap(props) {

    useEffect(() => {

        if (!props.latitude || !props.longitude) {
            return;
        }

        const location = {
            lat: Number(props.latitude),
            lng: Number(props.longitude)
        };

        const map = new window.google.maps.Map(
            document.getElementById("eventcrew-google-map"),
            {
                center: location,
                zoom: 15
            }
        );

        new window.google.maps.Marker({
            position: location,
            map: map
        });

    }, [props.latitude, props.longitude]);

    if (!props.latitude || !props.longitude) {
        return null;
    }

    return (
        <div className="eventcrew-opportunity-map">

            <h2>Location Map</h2>

            <div id="eventcrew-google-map"></div>

        </div>
    );
}

export default OpportunityMap;