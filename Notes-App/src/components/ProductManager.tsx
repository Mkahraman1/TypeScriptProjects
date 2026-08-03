import { useState } from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

type Product = {
    id: number
    name: string
    price: number
    stock: number
}

function ProductManager() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [products, setProducts] = useState<Product[]>([])

    const [duzenlenenId, setDuzenlenenId] = useState<number | null>(null)
    const [duzenlenenName, setDuzenlenenName] = useState("")
    const [duzenlenenPrice, setDuzenlenenPrice] = useState("")
    const [duzenlenenStock, setDuzenlenenStock] = useState("")

    function urunEkle() {
        if (
            name.trim() === "" ||
            price.trim() === "" ||
            stock.trim() === ""
        ) {
            return
        }

        const yeniUrun: Product = {
            id: Date.now(),
            name,
            price: Number(price),
            stock: Number(stock),
        }

        setProducts([...products, yeniUrun])

        setName("")
        setPrice("")
        setStock("")
    }

    function urunSil(id:number){
        const guncellenmisUrunler = products.filter((product)=>product.id !== id)
        setProducts(guncellenmisUrunler)
    }

    function urunKaydet() {
        if (
            duzenlenenName.trim() === "" ||
            duzenlenenPrice.trim() === "" ||
            duzenlenenStock.trim() === ""
        ) {
            return
        }

        const guncellenmisUrunler = products.map((product) => {
            if (product.id === duzenlenenId) {
                return {
                    ...product,
                    name: duzenlenenName,
                    price: Number(duzenlenenPrice),
                    stock: Number(duzenlenenStock),
                }
            }
            return product
        })

        setProducts(guncellenmisUrunler)

        setDuzenlenenId(null)
        setDuzenlenenName("")
        setDuzenlenenPrice("")
        setDuzenlenenStock("")
    }

    return (
        <Container maxWidth="sm">
            <Stack spacing={2}>
                <Typography
                    align="center"
                    color="primary"
                    variant="h4"
                    gutterBottom
                >
                    PRODUCT MANAGER
                </Typography>

                <TextField
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    label="Ürün ismi"
                    variant="standard"
                />

                <Stack direction="row" spacing={2}>
                    <TextField
                        sx={{ flex: 1 }}
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        label="Ürün Fiyatı"
                        type="number"
                        variant="standard"
                    />

                    <TextField
                        sx={{ flex: 1 }}
                        value={stock}
                        onChange={(event) => setStock(event.target.value)}
                        label="Ürün Stoğu"
                        type="number"
                        variant="standard"
                    />
                </Stack>

                <Button onClick={urunEkle} variant="contained">
                    Ekle
                </Button>
            </Stack>

            <Stack spacing={2} sx={{ mt: 3 }}>
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardContent>
                            {duzenlenenId === product.id ? (
                                <Stack spacing={2}>
                                    <TextField
                                        value={duzenlenenName}
                                        onChange={(event) =>
                                            setDuzenlenenName(event.target.value)
                                        }
                                        label="Ürün ismi"
                                        variant="standard"
                                    />

                                    <Stack direction="row" spacing={2}>
                                        <TextField
                                            sx={{ flex: 1 }}
                                            value={duzenlenenPrice}
                                            onChange={(event) =>
                                                setDuzenlenenPrice(event.target.value)
                                            }
                                            label="Ürün Fiyatı"
                                            type="number"
                                            variant="standard"
                                        />

                                        <TextField
                                            sx={{ flex: 1 }}
                                            value={duzenlenenStock}
                                            onChange={(event) =>
                                                setDuzenlenenStock(event.target.value)
                                            }
                                            label="Ürün Stoğu"
                                            type="number"
                                            variant="standard"
                                        />
                                    </Stack>

                                    <Stack direction="row" spacing={1}>
                                        <Button onClick={urunKaydet} variant="contained">
                                            Kaydet
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            onClick={() => setDuzenlenenId(null)}
                                        >
                                            İptal
                                        </Button>
                                    </Stack>
                                </Stack>
                            ) : (
                                <Stack
                                    direction="row"
                                    sx={{
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Stack>
                                        <Typography variant="h6">
                                            {product.name}
                                        </Typography>

                                        <Typography variant="body1">
                                            Fiyat: {product.price} TL
                                        </Typography>

                                        <Typography variant="body1">
                                            Stok: {product.stock}
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                setDuzenlenenId(product.id)
                                                setDuzenlenenName(product.name)
                                                setDuzenlenenPrice(String(product.price))
                                                setDuzenlenenStock(String(product.stock))
                                            }}
                                        >
                                            Düzenle
                                        </Button>

                                        <Button onClick={()=>urunSil(product.id)} variant="contained" color="error">
                                            Sil
                                        </Button>
                                    </Stack>
                                </Stack>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Container>
    )
}

export default ProductManager