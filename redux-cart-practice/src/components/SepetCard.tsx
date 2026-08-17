import { Card, Stack, CardActions, CardContent, Button, Typography } from "@mui/material"
import type { CartItem } from "../store/productSlice"
import { adetArttir, adetAzalt, sepettenSil } from "../store/productSlice"
import { useDispatch } from "react-redux"

type SepetProops = {
    product: CartItem
}

function SepetCard({ product }: SepetProops) {
    const dispatch = useDispatch()
    return (
        <Card sx={{ width: 200 }}>
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography>{product.price} TL</Typography>
                <Typography>Adet{product.quantity}</Typography>
            </CardContent>
            <CardActions>
                <Stack direction="row">
                    <Button onClick={() => dispatch(adetArttir(product.id))}>+</Button>
                    <Button onClick={() => dispatch(adetAzalt(product.id))}>-</Button>
                    <Button onClick={() => dispatch(sepettenSil(product.id))}>Sil</Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default SepetCard
