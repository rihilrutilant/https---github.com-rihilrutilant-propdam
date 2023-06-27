import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import CustomerService from "./Component/CustomerService";
import Plans from "./Component/Plans";
import Demo from "./Component/Demo";
import Footer from "./Component/Footer";
import Filter from "./Component/Filter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/demo" element={<Demo />} /> 
        <Route path="/Filter" element={<Filter />} /> 
        <Route path="/footer" element={<Footer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
