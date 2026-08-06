import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App