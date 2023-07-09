import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './pages/navbar/navbar';
import Page from './pages/page';
import LandingPage from './pages/landing';
import CountryPage from './pages/countryPage';
import DestinationsPage from './pages/destinationsPage';
import DetailPage from './pages/detailPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/country/:countryname" element={<CountryPage />} />
        <Route
          path="/destinations/:destinations"
          element={<DestinationsPage />}
        />
        <Route
          path="/destination/:places"
          element={<DetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
