import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Reservaton from './Pages/Reservation';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/fooldal" element={<Home />}></Route>
        <Route exact path="/tapasztalat" element={<Experience/>}></Route>
        <Route exact path="/foglalas" element={<Reservation/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
