import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import axios from "axios";
import { Typography, Container, Stack, TextField } from "@mui/material"
import MovieCard from "../components/MovieCard";

function Books() {

    const [movies, setMovies] = useState<Movie[]>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    const [text, setText] = useState<string>("")

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3001/movies")
                setMovies(response.data)
            } catch (error) {
                setError("Bir hata oluştu")
            } finally {
                setLoading(false)
            }

        }
        getMovies()
    }, [])

    if (loading) {
        return (
            <Typography variant="h5" align="center">Yükleniyor...</Typography>
        )
    }

    if (error) {
        return (
            <Typography variant="h5" align="center">{error}</Typography>
        )
    }

    const aramadakiFilmler = movies?.filter((movie) => movie.title.toLowerCase().includes(text))


    return (
        <Container maxWidth="lg">
            <Stack sx={{ width: '100%', alignItems: 'center' }}>
                <TextField sx={{ width: '40%' }} label="Film Ara" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
            </Stack>
            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'flexwrap' }}>
                {aramadakiFilmler?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Stack>
        </Container>
    )
}

export default Books
