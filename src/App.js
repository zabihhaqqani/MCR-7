import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './pages/navbar/navbar';
import Page from './pages/page/page';
import LandingPage from './pages/landing/landing';


function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/page" element={<Page/>} />
        
      </Routes>
    </div>
  );
}

export default App;
