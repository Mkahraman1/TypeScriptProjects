import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import type { Movie } from "../types/movie"
import { useNavigate } from "react-router-dom"

type MovieCardProps = {
    movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {

    const navigate = useNavigate()

    return (
        <Card
            sx={{
                width: 260,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {movie.image && (
                <CardMedia
                    component="img"
                    height="360"
                    image={movie.image}
                    alt={movie.name}
                />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {movie.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {movie.summary}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={() => navigate(`/movie/${movie.id}`)} size="small" variant="contained">
                    Detaya Git
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard