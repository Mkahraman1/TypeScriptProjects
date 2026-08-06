import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import type { RootState, AppDispatch } from "../redux/store"
import { getProductById } from "../redux/productsSlice"

import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { selectedProduct, loading, error } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    if (id) {
      dispatch(getProductById(Number(id)))
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        Ürün yükleniyor...
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

  if (!selectedProduct) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        Ürün bulunamadı.
      </Typography>
    )
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Card>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center" }}
        >
          <CardMedia
            component="img"
            image={selectedProduct.thumbnail}
            alt={selectedProduct.title}
            sx={{
              width: { xs: "100%", md: 360 },
              height: 360,
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {selectedProduct.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Kategori: {selectedProduct.category}
            </Typography>

            <Typography sx={{ mb: 2 }}>
              {selectedProduct.description}
            </Typography>

            <Typography variant="h5" sx={{ mb: 1 }}>
              {selectedProduct.price} $
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Puan: {selectedProduct.rating}
            </Typography>

            <Button
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Ürünlere Dön
            </Button>
          </CardContent>
        </Stack>
      </Card>
    </Container>
  )
}

export default ProductDetail