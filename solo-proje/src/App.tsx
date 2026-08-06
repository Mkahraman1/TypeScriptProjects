import Recipes from "./pages/Recipes"
import RecipeDetail from "./pages/RecipeDetail"
import Favorites from "./pages/Favorites"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/urunler/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
