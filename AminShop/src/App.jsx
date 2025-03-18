import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import ProductPage from "./pages/productPage/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
