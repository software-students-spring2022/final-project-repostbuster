import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header.js'
import Results from './components/Results.js';
import About from './About.js'
import UploadImage from './uploadImage';
import Technology from './Technology';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/tech" element={<Technology />}/>
          <Route path="/upload" element={<UploadImage />}/>
          <Route path="/results" element={<Results />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
