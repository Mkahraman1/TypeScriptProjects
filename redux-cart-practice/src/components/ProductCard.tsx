import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import type { Product } from "../types/product"
import { sepeteEkle } from "../store/productSlice"
import { useDispatch } from "react-redux"


type ProductProops = {
    product: Product
}

function ProductCard({ product }: ProductProops) {
    const dispatch = useDispatch()
    return (
        <Card sx={{ width: '250', p: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.price} TL
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(sepeteEkle(product))} variant="contained">Sepete Ekle</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
