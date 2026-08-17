import { Routes, Route } from "react-router-dom"
import Movies from "./pages/Movies"
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />}></Route>
      <Route path="/movies/:id" element={<MovieDetail />}></Route>
    </Routes>
  )
}

export default App
