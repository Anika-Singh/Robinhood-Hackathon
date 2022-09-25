import {Typography} from "@mui/material";
import Layout from "./Layout";
import GoogleMapCard from "../components/GoogleMapCard";

const HomePage = () => {
    return (
        <Layout>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant="h3">
                    Scroll through the map to find or add reports of environmental hazards
                </Typography>
                <br/>
                <GoogleMapCard/>
            </div>
        </Layout>
    )
}

export default HomePage;