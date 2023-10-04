import './App.css';
import Fruts_sec from './Fiuce_componet/Fruts_sec';
import Slider from './Fiuce_componet/Slider';
import Header from './Fiuce_componet/Header';
import Reward from './Fiuce_componet/Reward';
import Bestfrut from './Fiuce_componet/Bestfrut';
import { Routes, Route } from "react-router-dom";
import Register from './Fiuce_componet/Register';
import Discount from './Fiuce_componet/Discount';
import Login from './Fiuce_componet/Login';
import Add_product from './Fiuce_componet/Add_product';
import ShowProduct from './Fiuce_componet/Show_product';
import Singal_product from './Fiuce_componet/Singal_product';
import Cart from './Fiuce_componet/Cart';
import Home from './Fiuce_componet/Home';

function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Add_product' element={<Add_product />} />
        <Route path='/Show_product' element={<ShowProduct/>} />
        <Route path='/Singal_product/:id' element={<Singal_product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </>
  );
}

export default App;
