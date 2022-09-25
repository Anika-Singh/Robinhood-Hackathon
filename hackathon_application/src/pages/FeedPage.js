import {Typography} from "@mui/material";
import Layout from "./Layout";
import Feed  from '../components/feed';

const FeedPage = () => {
    return (
        <Layout>
            <Typography>
                <div align = "center">
                    <Feed></Feed>
                </div>
            </Typography>
        </Layout>
    )
}

export default FeedPage;