import { useParams } from "react-router-dom";
import type { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Card, CardActions, CardContent, Button, Stack, Typography, Container } from "@mui/material"


function MovieDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios.get(`http://localhost:3001/movies/${id}`)
            setMovie(response.data)
        }
        getMovie()
    }, [id])

    if (!movie) {
        return
    }


    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                        </Typography>
                        <Typography>
                            ⭐ {movie.rating} / 10
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography >
                            Yıl : {movie.year}
                        </Typography>
                        <Typography>
                            Tür : {movie.genre}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography gutterBottom variant="h5" component="div">
                            Film Hakkında
                        </Typography>
                        <Typography color="text.secondary">
                            {movie.description}
                        </Typography>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={() => navigate(`/`)}>Geri Dön</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default MovieDetail
