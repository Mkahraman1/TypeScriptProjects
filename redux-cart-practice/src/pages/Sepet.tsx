import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Container, Stack, Typography } from "@mui/material"
import SepetCard from "../components/SepetCard";

function Sepet() {
    const products = useSelector((state: RootState) => state.products.items);

    const toplamFiyat = products.reduce((toplam, product) => {
        toplam += (product.price) * (product.quantity)
        return toplam
    }, 0)

    return (
        <Container maxWidth="lg" sx={{ mt: 7 }}>
            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', }}>
                {products.map((product) => (
                    <SepetCard key={product.id} product={product} />
                ))}
            </Stack>
            <Typography variant="h5" sx={{ mt: 3 }}>Toplam Fiyat:{toplamFiyat}</Typography>
        </Container>
    )
}
export default Sepet
