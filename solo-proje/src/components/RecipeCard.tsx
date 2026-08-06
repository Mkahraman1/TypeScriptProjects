import { useDispatch } from "react-redux";

import type { Recipe } from "../types/recipe";
import type { AppDispatch } from "../redux/store";
import { favoriyeEkle } from "../redux/favoritesSlice";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  

  return (
    <Card
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={recipe.image}
        alt={recipe.name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5">
          {recipe.name}
        </Typography>

        <Typography color="text.secondary">
          {recipe.cuisine}
        </Typography>

        <Typography color="text.secondary">
          {recipe.difficulty}
        </Typography>

        <Typography color="text.secondary">
          ⭐ {recipe.rating}
        </Typography>

        <Typography color="text.secondary">
          Hazırlama: {recipe.prepTimeMinutes} dk
        </Typography>

        <Typography color="text.secondary">
          Pişirme: {recipe.cookTimeMinutes} dk
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={()=>navigate(`/urunler/${recipe.id}`)} size="small">
          Detay
        </Button>

        <Button
          size="small"
          onClick={() => dispatch(favoriyeEkle(recipe))}
        >
          Favoriye Ekle
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default RecipeCard;