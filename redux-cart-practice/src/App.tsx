import Products from "./pages/Products"
import Sepet from "./pages/Sepet"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/sepet" element={<Sepet />}></Route>
      </Routes>
    </div>
  )
}

export default App
