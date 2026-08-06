import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { arttir, azalt ,sepettenSil } from "../redux/cartSlice";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';



export default function Cart() {

    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <Container maxWidth="lg">
            <Stack direction="row" spacing={2} useFlexGap sx={{ mt: 3, justifyContent: "center", alignItems: 'center' }}>
                {items.map((item) => (
                    <Card key={item.id} sx={{ width: 230 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {item.name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {item.price} TL
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Kategori: {item.category}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Adet: {item.quantity}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button onClick={() => dispatch(azalt(item.id))}>
                                -
                            </Button>

                            <Button onClick={() => dispatch(arttir(item.id))}>
                                +
                            </Button>

                            <Button
                                color="error"
                                onClick={() => dispatch(sepettenSil(item.id))}
                            >
                                Sil
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
        </Container>
    )
}
