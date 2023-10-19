
import './App.css';
import Bmjpractice from './Bmjpractice';
import Navbar from './Navbar';
import Wrapper from './Wrapper';
// import Calculator from './Calculator';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <div className="App">



    <BrowserRouter>
       <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />     
          <Route path="contact" element={<Contact />} />    
      </Routes>
    </BrowserRouter>
         <Bmjpractice />
      <Wrapper/>
   {/* <Calculator /> */}

    </div>
  );
}

export default App;
