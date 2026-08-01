import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useEffect, useState } from "react"


type Movie = {
    id: number,
    title: string
}

function Movie() {

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {

        const getMovies = async () => {

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json()
                setMovies(data)
                setLoading(false)
            } catch (error) {
                setError("Bir hata olustu")

            } finally {
                setLoading(false)
            }

        }

        getMovies()

    }, [])


    if (loading) {
        return (
            <Container sx={{ mt: 5 }}>
                <Typography
                    variant="h6"
                    align="center"
                >
                    Veriler yükleniyor...
                </Typography>
            </Container>
        )
    }

    if (error) {
        return (
            <Container sx={{ mt: 5 }}>
                <Typography
                    variant="h6"
                    align="center"
                >
                    {error}
                </Typography>
            </Container>
        )
    }


    const filtrelenmisDizi = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <Container>
            <Typography variant='h4'
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    justifyContent: "center",
                    mt: 2
                }}
            >
                <LiveTvIcon fontSize='medium' />
                Movie Search
            </Typography>

            <Stack sx={{
                mt: 3,
                maxWidth: 500,
                mx: "auto",
            }}>
                <TextField
                    variant="standard"
                    label="Film ara"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </Stack>

            {filtrelenmisDizi.length === 0 ? (<Typography color='error' sx={{mt:3, textAlign:'center'}} variant="h5">Eşleşme Bulunamadı</Typography>) : (<Stack spacing={2} sx={{ mt: 4 }}>
                {filtrelenmisDizi.map((movie) => (
                    <Card key={movie.id}>
                        <CardContent>
                            <Typography variant="h5">
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>)}

        </Container>
    )
}

export default Movie
