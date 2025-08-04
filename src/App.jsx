import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import ProductPage from "./pages/productPage/ProductPage";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";
import { ShopingCartProvider } from "./context/shopingCartContext";

function App() {
  return (
    <>
      <ShopingCartProvider>
        <Header />
        <Routes>
          <Route path="/Amin-Shop" element={<Home />} />
          <Route path="/Amin-Shop/shop" element={<Shop />} />
          <Route path="/Amin-Shop/store" element={<Store />} />
          <Route path="/Amin-Shop/store/:id" element={<ProductPage />} />
          <Route path="/Amin-Shop/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </ShopingCartProvider>
    </>
  );
}

export default App;
