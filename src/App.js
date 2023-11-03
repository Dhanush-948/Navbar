import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Phone from './pages/Phone/Phone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Routes>
       <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/phone" element={<Phone/>}/>
      </Routes>
      </BrowserRouter>
         
     
      
      
    </div>
  );
}

export default App;
