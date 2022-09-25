import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import MapPage from "./pages/MapPage";
import ReportPage from "./pages/ReportPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/map" element={<MapPage/>}/>
            <Route path="/report" element={<ReportPage/>}/>
            <Route path="/profile" element={<UserPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
