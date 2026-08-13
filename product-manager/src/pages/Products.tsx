import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../store/productSlice";
import ProductCard from "../components/ProductCard";
import AddProductForm from "../components/AddProductForm";
import TextField from '@mui/material/TextField';


import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";


function Products() {

    const [text, setText] = useState<string>("")


    const dispatch = useDispatch<AppDispatch>();

    const products = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (products.loading) {
        return (
            <Typography variant="h5" align="center">Yükleniyor</Typography>
        )
    }

    if (products.error) {
        return (
            <Typography variant="h5" align="center">{products.error}</Typography>
        )
    }

    const ürünsil = async (id: string) => {
        dispatch(deleteProduct(id));
    }

    const searchProduct = products.products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()))

    return (
        <Container maxWidth="lg">
            <Typography align="center" variant="h4" sx={{ fontWeight: 'bold', mb: 3, }}>PRODUCT MANAGER</Typography>
            <Stack sx={{ width:'100%' ,alignItems:'center'}}>
                <TextField value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Ürün Adi" variant="outlined" sx={{ width: '50%' }} />
            </Stack>
            <AddProductForm />
            <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: "wrap", justifyContent: 'center' }}>
                {searchProduct.map((product) => (
                    <ProductCard key={product.id} product={product} ürünsil={ürünsil} />
                ))}
            </Stack>
        </Container>
    )
}

export default Products
