import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGames } from "../redux/gamesSlice"

import { sepeteEkle } from "../redux/cartSlice"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import type { RootState, AppDispatch } from "../redux/store"
import CardMedia from "@mui/material/CardMedia"

function Games() {

    const dispatch = useDispatch<AppDispatch>()

    const { games, loading, error } = useSelector(
        (state: RootState) => state.games
    )

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sortBy, setSortBy] = useState("default")

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])

    if (loading) {
        return (
            <Typography align="center" sx={{ mt: 5 }}>
                Oyunlar yükleniyor...
            </Typography>
        )
    }

    if (error) {
        return (
            <Typography align="center" color="error" sx={{ mt: 5 }}>
                {error}
            </Typography>
        )
    }

    const filteredGames = games.filter((game) => {
        const ismeUyuyor = game.name
            .toLowerCase()
            .includes(search.toLowerCase())

        const kategoriyeUyuyor =
            category === "All" || game.category === category

        return ismeUyuyor && kategoriyeUyuyor
    })

    const sortedGames = [...filteredGames].sort((a, b) => {
        if (sortBy === "asc") return a.price - b.price
        if (sortBy === "desc") return b.price - a.price
        return 0
    })

    return (
        <Container maxWidth="lg">
            <Stack spacing={2} sx={{ mt: 3 }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                >
                    Game Store
                </Typography>

                <TextField
                    fullWidth
                    label="Oyun ara"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel id="category-label">
                            Kategori
                        </InputLabel>

                        <Select
                            labelId="category-label"
                            value={category}
                            label="Kategori"
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <MenuItem value="All">Hepsi</MenuItem>
                            <MenuItem value="Action">Action</MenuItem>
                            <MenuItem value="Sports">Sports</MenuItem>
                            <MenuItem value="Racing">Racing</MenuItem>
                            <MenuItem value="RPG">RPG</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="sort-label">
                            Fiyat Sıralaması
                        </InputLabel>

                        <Select
                            labelId="sort-label"
                            value={sortBy}
                            label="Fiyat Sıralaması"
                            onChange={(event) => setSortBy(event.target.value)}
                        >
                            <MenuItem value="default">Varsayılan</MenuItem>
                            <MenuItem value="asc">Ucuzdan Pahalıya</MenuItem>
                            <MenuItem value="desc">Pahalıdan Ucuza</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                {sortedGames.length === 0 ? (
                    <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
                        Eşleşen oyun bulunamadı.
                    </Typography>
                ) : (
                    <Stack
                        direction="row"
                        spacing={2}
                        useFlexGap
                        sx={{
                            flexWrap: "wrap",
                            justifyContent: "center",
                            mt: 2,
                        }}
                    >
                        {sortedGames.map((game) => (
                            <Card
                                key={game.id}
                                sx={{
                                    width: 240,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={game.image}
                                    alt={game.name}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" gutterBottom>
                                        {game.name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {game.price} TL
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Kategori: {game.category}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        Platform: {game.platform}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button
                                        variant="contained"
                                        onClick={() => dispatch(sepeteEkle(game))}
                                    >
                                        Sepete Ekle
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Stack>
                )}
            </Stack>
        </Container>
    )
}

export default Games