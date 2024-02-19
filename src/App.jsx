import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPageFinal } from "./pages/CheckoutPageFinal";
import { PaymentResultCancel } from "./pages/PaymentResultCancel";
import { PaymentResultOK } from "./pages/PaymentResultOK";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPageFinal />} />
        <Route path="/payment-cancel" element={<PaymentResultCancel />} />
        <Route path="/payment-ok" element={<PaymentResultOK />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
