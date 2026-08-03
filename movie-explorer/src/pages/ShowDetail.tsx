import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import CardMedia from "@mui/material/CardMedia"

import { getMovieById } from "../services/movieService"
import type { Movie } from "../types/movie"

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadMovie = async () => {
      try {
        if (!id) {
          throw new Error("Film id bulunamadı")
        }

        const data = await getMovieById(Number(id))
        setMovie(data)
      } catch {
        setError("Film yüklenemedi")
      } finally {
        setLoading(false)
      }
    }

    loadMovie()
  }, [id])

  if (loading) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Yükleniyor...
      </Typography>
    )
  }

  if (error) {
    return (
      <Typography align="center" color="error" sx={{ mt: 4 }}>
        {error}
      </Typography>
    )
  }

  if (!movie) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Film bulunamadı.
      </Typography>
    )
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stack spacing={3}>
        {movie.image && (
          <CardMedia
            component="img"
            image={movie.image}
            alt={movie.name}
            sx={{
              maxHeight: 500,
              objectFit: "contain",
            }}
          />
        )}

        <Typography variant="h4">
          {movie.name}
        </Typography>

        <Typography color="text.secondary">
          {movie.summary}
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/")}
        >
          Geri Dön
        </Button>
      </Stack>
    </Container>
  )
}

export default MovieDetail