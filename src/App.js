import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import CustomerService from "./Component/CustomerService";
import Plans from "./Component/Plans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
