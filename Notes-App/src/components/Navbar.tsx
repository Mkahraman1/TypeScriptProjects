import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <Stack
      sx={{
        backgroundColor: "black",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Router Practice
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              component={Link}
              to="/"
              sx={{ color: "white" }}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/about"
              sx={{ color: "white" }}
            >
              About
            </Button>

            <Button
              component={Link}
              to="/products"
              sx={{ color: "white" }}
            >
              Products
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Navbar