import { useDispatch, useSelector } from "react-redux"
import { favoridenCikar, favorileriTemizle } from "../redux/favoritesSlice"

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';


import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";




function Favorites() {

    const favoriler = useSelector((state: RootState) => state.favorites.recipe)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!favoriler) {
        return (
            <Typography>Favori ürün bulunamadi</Typography>
        )
    }

    

    return (
        <Container maxWidth="xl">
            <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                {favoriler.map((favori) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ maxWidth:260, height: 140 }}
                            image={favori.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {favori.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {favori.difficulty}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {favori.cookTimeMinutes}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => dispatch(favoridenCikar(favori.id))} size="small">Favoriden Cikar</Button>
                            <Button onClick={() => navigate("/")} size="small">Geri Dön</Button>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
            <Stack>
                <Button sx={{mt:20}} startIcon={<DeleteIcon />} onClick={() => dispatch(favorileriTemizle())} size="small">Favorileri Temizle</Button>
            </Stack>
        </Container>
    )
}

export default Favorites
