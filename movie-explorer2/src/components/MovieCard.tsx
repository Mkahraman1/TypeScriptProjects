import type { Movie } from "../types/Movie"
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";


type MovieCardProops = {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProops) {
    const navigate = useNavigate()
    return (
        <Card sx={{ width: 280, p: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography>
                    🎬 {movie.genre}
                </Typography>
                <Typography >
                    📅 {movie.year}
                </Typography>
                <Typography >
                    ⭐ {movie.rating} / 10
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(`/movies/${movie.id}`)} variant="contained">Detaya Git</Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard
