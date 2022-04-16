import './App.css';
import Search from './Components/Search';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from './Components/Details';
import Home from "./Components/Home";
import ScrollToTop from './Components/ScrollToTop';
import Summary from './Components/Summary';

function App() {
  return (
    <div style={{background:"#f4f4f4"}}>
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/results" element={<Search/>} />
            <Route path="/summary" element={<Summary/>} />
            <Route path="/details" element={<Details/>} exact/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
