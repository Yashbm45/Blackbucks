import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Footer from './Components/Footbar/Footbar.jsx';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services.jsx';
import StockChart from './Components/Animations/StockChart/Stockchat.jsx';


function App() {
  return (
  <>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Footer />
  </>
  );
}

export default App;
