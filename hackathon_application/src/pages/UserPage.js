import {Typography} from "@mui/material";
import Layout from "./Layout";
import UserFeed from "../components/UserFeed";

const UserPage = () => {
    return (
        <Layout>
            <Typography>
            <div style = {{background: '#5DB075', maxHeight:false, width: '100%', height: '100%', margin:0}}>

                <UserFeed></UserFeed>
            </div>
                
            </Typography>
        </Layout>
    )
}

export default UserPage;