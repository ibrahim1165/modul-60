import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shard/Footer/Footer';
import Header from './pages/Shard/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
