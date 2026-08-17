import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { AppBar, Typography, Stack, Button } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";



function Navbar() {
    const products = useSelector((state: RootState) => state.products.items);

    const urunAdeti = products.filter(product => product).length;


    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Stack direction="row" sx={{ p: 1, alignItems: 'center', justifyContent: 'space-between', mx: 2 }}>
                <Typography
                    component={Link}
                    to="/"
                    variant="h5"
                    sx={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Shopping Cart
                </Typography>
                <Button
                    component={Link}
                    to="/sepet"
                    sx={{ color: 'white' }}
                    endIcon={
                        <Badge badgeContent={urunAdeti} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    }
                >
                    Sepetim
                </Button>
            </Stack>
        </AppBar>
    )
}

export default Navbar
