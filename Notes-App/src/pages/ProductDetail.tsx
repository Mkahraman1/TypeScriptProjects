import { useNavigate, useParams } from "react-router-dom"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

type Product = {
  id: number
  name: string
  price: number
}

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const products: Product[] = [
    { id: 1, name: "Klavye", price: 1000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Kulaklık", price: 1500 },
    { id: 4, name: "Monitör", price: 8000 },
  ]

  const bulunanUrun = products.find(
    (product) => product.id === Number(id)
  )

  if (!bulunanUrun) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">
          Böyle bir ürün bulunamadı.
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h4">
          {bulunanUrun.name}
        </Typography>

        <Typography variant="h6">
          {bulunanUrun.price} TL
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/products")}
        >
          Geri Dön
        </Button>
      </Stack>
    </Container>
  )
}

export default ProductDetail