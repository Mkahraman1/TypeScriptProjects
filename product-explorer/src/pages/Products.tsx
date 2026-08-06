import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sepeteEkle } from "../redux/cartSlice"

import type { RootState, AppDispatch } from "../redux/store"
import { getProducts } from "../redux/productsSlice"

import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

function Products() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sortBy, setSortBy] = useState("default")

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const { products, loading, error } = useSelector(
        (state: RootState) => state.products
    )

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const filteredProducts = products.filter((product) => {
        const ismeUyuyor = product.title
            .toLowerCase()
            .includes(search.toLowerCase())

        const kategoriyeUyuyor =
            category === "All" || product.category === category

        return ismeUyuyor && kategoriyeUyuyor
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "asc") {
            return a.price - b.price
        }

        if (sortBy === "desc") {
            return b.price - a.price
        }

        return 0
    })

    if (loading) {
        return (
            <Typography align="center" sx={{ mt: 5 }}>
                Ürünler yükleniyor...
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

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    mb: 4,
                    fontWeight: "bold",
                }}
            >
                Product Explorer
            </Typography>

            <Stack spacing={2} sx={{ mb: 4 }}>
                <TextField
                    fullWidth
                    label="Ürün ara"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                >
                    <FormControl fullWidth>
                        <InputLabel id="category-label">
                            Kategori
                        </InputLabel>

                        <Select
                            labelId="category-label"
                            value={category}
                            label="Kategori"
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                        >
                            <MenuItem value="All">Hepsi</MenuItem>
                            <MenuItem value="beauty">Beauty</MenuItem>
                            <MenuItem value="fragrances">
                                Fragrances
                            </MenuItem>
                            <MenuItem value="furniture">
                                Furniture
                            </MenuItem>
                            <MenuItem value="groceries">
                                Groceries
                            </MenuItem>
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
                            onChange={(event) =>
                                setSortBy(event.target.value)
                            }
                        >
                            <MenuItem value="default">
                                Varsayılan
                            </MenuItem>

                            <MenuItem value="asc">
                                Ucuzdan Pahalıya
                            </MenuItem>

                            <MenuItem value="desc">
                                Pahalıdan Ucuza
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>

            {sortedProducts.length === 0 ? (
                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mt: 4 }}
                >
                    Eşleşen ürün bulunamadı.
                </Typography>
            ) : (
                <Stack
                    direction="row"
                    spacing={3}
                    useFlexGap
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {sortedProducts.map((product) => (
                        <Card
                            key={product.id}
                            sx={{
                                width: 260,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="220"
                                image={product.thumbnail}
                                alt={product.title}
                                sx={{
                                    objectFit: "contain",
                                    p: 2,
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {product.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {product.category}
                                </Typography>

                                <Typography variant="h6">
                                    {product.price} $
                                </Typography>
                            </CardContent>

                            <Stack direction="row" spacing={1} sx={{ m: 2 }}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={() => dispatch(sepeteEkle(product))}
                                >
                                    Sepete Ekle
                                </Button>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    Detaya Git
                                </Button>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            )}
        </Container>
    )
}

export default Products