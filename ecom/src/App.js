import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap'
import Header from './Header'
import { BrowserRouter, Route, Routes ,Switch} from 'react-router-dom'
import AddProduct from './AddProduct'
import Login from './Login'
import Register from './Register'
import ListProduct from "./ListProduct";
import UpdateProduct from "./UpdateProduct";


import Protected from "./Protected";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

       
        <Routes>
         
          <Route path="/" element={<Protected component={ListProduct} />} />

          <Route path="/add" element={<Protected component={AddProduct} />} />
          <Route path="/update/:id" element={<Protected component={UpdateProduct} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
