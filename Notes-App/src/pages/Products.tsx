import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom"


type Product = {
    id: number
    name: string
    price: number
}

const products: Product[] = [
    { id: 1, name: "Klavye", price: 1000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Kulaklık", price: 1500 },
    { id: 4, name: "Monitör", price: 8000 },
]

function Products() {
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Stack
                    direction="row"
                    spacing={2}
                    useFlexGap
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            sx={{
                                width: 260,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {product.name}
                                </Typography>

                                <Typography color="text.secondary">
                                    {product.price} TL
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button
                                    component={Link}
                                    to={`/products/${product.id}`}
                                    variant="contained"
                                    size="small"
                                >
                                    Detaya Git
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </div>
    )
}

export default Products
