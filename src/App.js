import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import DribbleInfo from './Components/DribbleInfo';
import About from './Components/About';
import Footer from './Components/Footer';
// import ImageInput from './Components/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/dribbleinfo' element={<DribbleInfo/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
