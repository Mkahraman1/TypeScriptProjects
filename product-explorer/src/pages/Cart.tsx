import { useDispatch, useSelector } from "react-redux"

import type { RootState, AppDispatch } from "../redux/store"
import {
  arttir,
  azalt,
  sepettenSil,
} from "../redux/cartSlice"

import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

function Cart() {
  const dispatch = useDispatch<AppDispatch>()

  const items = useSelector(
    (state: RootState) => state.cart.items
  )

  const toplamUrun = items.reduce(
    (toplam, item) => toplam + item.quantity,
    0
  )

  const toplamTutar = items.reduce(
    (toplam, item) =>
      toplam + item.price * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <Typography align="center" sx={{ mt: 6 }}>
        Sepetiniz boş.
      </Typography>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Sepetim
      </Typography>

      <Stack spacing={2}>
        {items.map((item) => (
          <Card key={item.id}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ alignItems: "center" }}
            >
              <CardMedia
                component="img"
                image={item.thumbnail}
                alt={item.title}
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: "contain",
                  p: 2,
                }}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>

                <Typography color="text.secondary">
                  {item.price} $
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Adet: {item.quantity}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Ara Toplam:{" "}
                  {(item.price * item.quantity).toFixed(2)} $
                </Typography>
              </CardContent>

              <Stack
                direction="row"
                spacing={1}
                sx={{ p: 2 }}
              >
                <Button
                  variant="outlined"
                  onClick={() => dispatch(azalt(item.id))}
                >
                  -
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => dispatch(arttir(item.id))}
                >
                  +
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() =>
                    dispatch(sepettenSil(item.id))
                  }
                >
                  Sil
                </Button>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">
            Toplam Ürün: {toplamUrun}
          </Typography>

          <Typography variant="h5" sx={{ mt: 1 }}>
            Toplam Tutar: {toplamTutar.toFixed(2)} $
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Cart