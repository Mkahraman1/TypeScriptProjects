import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import ShowDetail from "./pages/ShowDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  )
}

export default App
