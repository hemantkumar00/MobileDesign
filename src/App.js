// import MainProductPage from "./ProductPage/MainProductPage";
import Payment from "./PaymentPage/MainPayment";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import MainProductPage from "./ProductPage/MainProductPage";
require("./Style.css");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product" element={<MainProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
