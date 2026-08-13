import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

import type { Product } from '../types/Product';

interface ProductCardProps {
    product: Product;
    ürünsil: (id: string) => void;
}


function ProductCard({ product, ürünsil }: ProductCardProps) {
    return (
        <Card sx={{ p: 3 }}>
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
                <Typography variant='caption'>{product.price} TL</Typography>
                <Button onClick={()=>ürünsil(product.id)} variant='contained' color='error'>Sil</Button>
            </Stack>    
        </Card>
    )
}

export default ProductCard
