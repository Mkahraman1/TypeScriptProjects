import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import type { RootState } from "../redux/store"

function Navbar() {
  const items = useSelector((state: RootState) => state.cart.items)

  const toplamUrun = items.reduce(
    (toplam, item) => toplam + item.quantity,
    0
  )

  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        borderBottom: "1px solid #424242",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Redux Shop
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
              }}
            >
              Ürünler
            </Button>

            <Button
              component={Link}
              to="/cart"
              startIcon={<ShoppingCartIcon />}
              sx={{
                color: "white",
              }}
            >
              Sepet ({toplamUrun})
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar