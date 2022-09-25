import React from "react";
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

const GoogleMapCard = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAGAxGQk2o303hZkwdnGlkr4eLhXCGbAEg" >
            <GoogleMap
                mapContainerStyle={{
                    "width": "80vw",
                    "height": "80vh"
                }}
                center={{
                    lat: -3.745,
                    lng: -38.232
                }}
                zoom={10}
            >
                <Marker key="point_1" position={{
                    lat: -3.745,
                    lng: -38.232
                }}>
                </Marker>
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapCard;