import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Addservice from './pages/AddService/Addservice';
import Home from './pages/Home/Home/Home';
import Location from './pages/Home/Home/Location';
import Login from './pages/Login/Login';
import Regester from './pages/Login/Regester/Regester';
import Managservice from './pages/Managservices/Managservice';
import ServiceDetels from './pages/ServiceDetela/ServiceDetels';
import Footer from './pages/Shard/Footer/Footer';
import Header from './pages/Shard/Header/Header';
import NotFound from './pages/Shard/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
   <Route path="/about" element={<About></About>}></Route>
   <Route path="/login" element={<Login></Login>}></Route>
   <Route path="/location" element={<Location></Location>}></Route>
   <Route path="/regester" element={<Regester></Regester>}></Route>
   <Route path="/addservice" element={<Addservice />}></Route>
   <Route path="/managservice" element={<Managservice/>}></Route>
   <Route path="/service/:serviceId" element={<ServiceDetels></ServiceDetels>}></Route>
   <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
