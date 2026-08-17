import { useState } from "react"
import { products } from "../data/ProductData"
import type { Product } from "../types/product"
import { Container, Stack } from "@mui/material"
import ProductCard from "../components/ProductCard"



function Products() {

    const [productList] = useState<Product[]>(products);

    return (
        <Container maxWidth="lg" sx={{mt:7}}>
            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Stack>
        </Container>
    )
}

export default Products
