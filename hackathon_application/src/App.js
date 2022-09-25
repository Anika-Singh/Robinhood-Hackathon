import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import ReportPage from "./pages/ReportPage";
import UserPage from "./pages/UserPage";
import {createTheme, ThemeProvider} from "@mui/material";
import React, {useState} from "react";

const theme = createTheme({
    typography: {
        fontFamily: '"Hubballi, cursive"'
    }
})

function App() {
    const [reports, setReports] = useState([]);

    const addItem = (newItem) => [...reports, newItem]

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        {["/home", "/"].map(route => {
                            return (
                                <Route path={route} element={<HomePage/>}/>
                            )
                        })}
                        <Route path="/feed" element={<FeedPage/>}/>
                        <Route path="/report" element={<ReportPage/>}/>
                        <Route path="/profile" element={<UserPage/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
);
}

export default App;
