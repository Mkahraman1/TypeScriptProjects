import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Games from "./pages/Games"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App