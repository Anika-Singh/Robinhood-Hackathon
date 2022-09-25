import {Typography} from "@mui/material";
import Layout from "./Layout";
import  Reporting from  '../components/user_reports';

const ReportPage = () => {
    return (
        <Layout>
            <Typography>
                <Reporting></Reporting>
            </Typography>
        </Layout>
    )
}

export default ReportPage;