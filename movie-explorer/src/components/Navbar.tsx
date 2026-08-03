import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import MovieIcon from "@mui/icons-material/Movie"

import { Link } from "react-router-dom"

function Navbar() {
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
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <MovieIcon sx={{ color: "#FFD54F" }} />

            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Movie Explorer
            </Typography>
          </Stack>

          <Button
            component={Link}
            to="/"
            sx={{ color: "white" }}
          >
            Home
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar