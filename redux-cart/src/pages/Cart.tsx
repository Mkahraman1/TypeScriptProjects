import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { arttir, azalt, sepettenSil } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const toplamFiyat = items.reduce(
    (toplam, item) => toplam + item.price * item.quantity,
    0
  );

  const toplamUrun = items.reduce(
    (toplam, item) => toplam + item.quantity,
    0
  );

  return (
    <Container>
      {items.length === 0 ? (
        <Typography
          align="center"
          variant="h6"
          sx={{ mt: 4 }}
        >
          Sepet boş...
        </Typography>
      ) : (
        <>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{
              flexWrap: "wrap",
              mt: 3,
            }}
          >
            {items.map((item) => (
              <Card key={item.id} sx={{ width: 260 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Fiyat: {item.price} TL
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Adet: {item.quantity}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
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
                      color="error"
                      variant="outlined"
                      onClick={() => dispatch(sepettenSil(item.id))}
                    >
                      Sil
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Typography
            variant="h5"
            sx={{ mt: 4, fontWeight: "bold" }}
          >
            Toplam Tutar: {toplamFiyat} TL
          </Typography>

          <Typography
            variant="h5"
            sx={{ mt: 1, fontWeight: "bold" }}
          >
            Toplam Ürün: {toplamUrun}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default Cart;