import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
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
    <Box sx={{ bgcolor: "#212121" }}>
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
            component={Link}
            to="/"
            variant="h6"
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Game Store
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              component={Link}
              to="/"
              sx={{ color: "white" }}
            >
              Oyunlar
            </Button>

            <Button
              component={Link}
              to="/cart"
              startIcon={<ShoppingCartIcon />}
              sx={{ color: "white" }}
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