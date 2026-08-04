import type { Product } from "../types/product"
import { useDispatch } from "react-redux"
import { sepeteEkle } from "../redux/cartSlice"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

const products: Product[] = [
    { id: 1, name: "Klavye", price: 1000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Kulaklık", price: 1500 },
    { id: 4, name: "Bilgisayar", price: 50000 },
]

function Products() {
    const dispatch = useDispatch()
    return (
            <Container maxWidth="lg">
                <Stack direction="row" spacing={2} useFlexGap sx={{flexWrap:"wrap",mt:3}}>
                    {products.map((product) => (
                        <Card key={product.id} sx={{ width: 260 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                     {product.price} TL
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => dispatch(sepeteEkle(product))} size="small">Sepete Ekle</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
            </Container>
    )
}

export default Products
