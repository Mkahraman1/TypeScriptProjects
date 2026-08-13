import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Paper from '@mui/material/Paper';


import type { AppDispatch } from "../store/store";
import { useDispatch } from 'react-redux';
import { addProducts } from '../store/productSlice';
import Button from '@mui/material/Button';


function AddProductForm() {

    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number | "">("");

    const dispatch = useDispatch<AppDispatch>();

    const handleAddProduct = () => {
        if (name === "" && price === "") {
            return
        }
        dispatch(
            addProducts({
                id: crypto.randomUUID(),
                name: name,
                price: Number(price),
            })
        );
        setName("")
        setPrice("")
    };




    return (
        <Container maxWidth="md" sx={{ mb: 4, mt: 4 }}>
            <Paper elevation={8} sx={{ p: 3 }}>
                <Stack spacing={3}>
                    <Typography align='center' variant='h5' color='textSecondary' sx={{ fontWeight: 'bold' }}>Ürün Ekle</Typography>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Ürün Adi" variant="outlined" />
                    <TextField type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} id="outlined-basic" label="Ürün Fiyati" variant="outlined" />
                    <Button variant="contained" onClick={handleAddProduct}>Contained</Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default AddProductForm
