import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { PaymentResultCancel } from "./pages/PaymentResultCancel";
import { PaymentResultOK } from "./pages/PaymentResultOK";

import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import Main from "./components/Main/Main";
import BlogRecomendados from "./components/BlogRecomendados/BlogRecomendados";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-cancel" element={<PaymentResultCancel />} />
        <Route path="/payment-ok" element={<PaymentResultOK />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
