import { useDispatch, useSelector } from "react-redux"
import { getRecipeById } from "../redux/recipeSlice"
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"



function RecipeDetail() {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();
    const navigate = useNavigate()

    const { selectedRecipe, loading, error } = useSelector(
        (state: RootState) => state.recipes
    );

    useEffect(() => {
        if (id) {
            dispatch(getRecipeById(Number(id)));
        }
    }, [dispatch, id]);

    if (loading) {
        return (
            <Typography align="center" variant="h6">
                Yükleniyor...
            </Typography>
        );
    }

    if (error) {
        return (
            <Typography align="center" variant="h6">
                {error}
            </Typography>
        );
    }

    if (!selectedRecipe) {
        return (
            <Typography align="center" variant="h6">
                Tarif bulunamadı.
            </Typography>
        );
    }



    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Stack>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={selectedRecipe.image}
                        alt={selectedRecipe.name}
                        sx={{ objectFit: "cover" }}
                    />

                    <CardContent>
                        <Stack spacing={3}>
                            <Typography gutterBottom variant="h5">
                                {selectedRecipe.name}
                            </Typography>

                            <Stack>
                                {selectedRecipe.instructions.map((instruction, index) => (
                                    <Typography
                                        key={index}
                                        variant="body2"
                                        sx={{ color: "text.secondary", mb: 1 }}
                                    >
                                        <strong>  {index + 1}.</strong>  {instruction}
                                    </Typography>
                                ))}
                            </Stack>
                            <Stack>
                                {selectedRecipe.ingredients.map((ingredient, index) => (
                                    <Typography
                                        key={index}
                                        variant="body2"
                                        sx={{ color: "text.secondary", mb: 1 }}
                                    >
                                        <strong>{index + 1}. </strong> {ingredient}
                                    </Typography>
                                ))}
                            </Stack>
                        </Stack>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => navigate("/")} size="small">Geri Dön</Button>
                    </CardActions>
                </Card>
            </Stack>
        </Container>
    )
}

export default RecipeDetail
