import { useEffect, useState } from "react"
import { getMovies } from "../services/movieService"
import type { Movie } from "../types/movie"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import MovieCard from "../components/MovieCard"


function Home() {


    const [filmler, setFilmler] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await getMovies()
                setFilmler(data)
            } catch (error) {
                setError("Bir hata oluştu")
            } finally {
                setLoading(false)
            }
        }
        loadMovies()
    }, [])

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Stack
                direction="row"
                spacing={3}
                useFlexGap
                sx={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {filmler.map((film) => (
                    <MovieCard key={film.id} movie={film} />
                ))}
            </Stack>
        </Container>
    )
}

export default Home
