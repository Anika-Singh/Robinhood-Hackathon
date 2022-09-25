import React, {useState} from "react";
import { GoogleMap, LoadScript, MarkerF, InfoWindow} from "@react-google-maps/api";
import {Box, Modal, Typography} from "@mui/material";

const GoogleMapCard = () => {
    const markers = [
        {
            position: {
                lat: -3.745,
                lng: -42.232
            },
            hazard: "Air polution",
            problem: "People in the factory releasing a big amount of gas"
        },
        {
            position: {
                lat: -2.745,
                lng: -45.232
            },
            hazard: "Litering",
            problem: "People in the concert left a huge amount of garbage in the stadium"
        },
        {
            position: {
                lat: -21.745,
                lng: -12.232
            },
            hazard: "Water polution",
            problem: "OIL LEAKING!!!"
        }
    ];


    const [currentMarker, setCurrentMarker] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const clickMarker = (marker) => {
        setCurrentMarker(marker)
        setOpen(true)
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyAfxpFVFh5Ez84iGlbiXjlvz3zUyM4YgCU" >
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
                {markers.map(marker => {
                    return (
                        <MarkerF key='0'
                            icon={{ strokeWeight: 0, scale: 1.5}}
                            position={marker.position}
                            onClick={() => clickMarker(marker)}
                        />
                    )
                })}
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box sx={{
                        backgroundColor: "white",
                        width: "30vw",
                        height: "30vh",
                        borderRadius: "50px"
                    }}>
                        <div style={{
                            padding: "40px 30px"
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Hazard Details
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <b>Hazard Type</b>: {currentMarker && currentMarker.hazard}
                            </Typography>
                            <Typography>
                                <b>Problem</b>: {currentMarker && currentMarker.problem}
                            </Typography>
                        </div>
                    </Box>
                </Modal>
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapCard;