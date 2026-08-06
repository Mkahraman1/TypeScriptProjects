import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";



function Navbar() {
    const favoriler = useSelector((state:RootState) => state.favorites.recipe)

    return (
        <Container
            maxWidth={false}
            sx={{
                bgcolor: "white",
                borderBottom: "1px solid #e0e0e0",
                py: 2,
                mb: 3,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={4}
                        sx={{
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            component={Link}
                            to="/"
                            variant="h5"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                textDecoration: "none",
                                color: "inherit",
                                fontWeight: "bold",
                            }}
                        >
                            <RestaurantMenuIcon color="success" />
                            Yemek Tarifleri
                        </Typography>

                        <Button
                            component={Link}
                            to="/"
                            color="inherit"
                        >
                            Tarifler
                        </Button>
                    </Stack>

                    <Button
                        component={Link}
                        to="/favorites"
                        startIcon={<FavoriteIcon color="error" />}
                        variant="outlined"
                        sx={{
                            ml: "auto",
                        }}
                    >
                       {favoriler.length} Favoriler
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
}

export default Navbar;