import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../redux/store";
import { getRecipes } from "../redux/recipeSlice";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import RecipeCard from "../components/RecipeCard";


function Recipes() {
  const dispatch = useDispatch<AppDispatch>();

  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const [text, setText] = useState<string>("")
  const [zorluk, setZorluk] = useState<"All" | "Easy" | "Medium">("All");
  const [sortBy, setSortBy] = useState<"All" | "asc" | "desc">("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const aramayaUyuyor = recipe.name.toLowerCase().includes(text.toLowerCase())
    const zorlugaUyuyor = zorluk === "All" || recipe.difficulty === zorluk;
    return aramayaUyuyor && zorlugaUyuyor
  })
  .sort((a,b)=>{
    if(sortBy === "All"){
      return 0
    }
    if(sortBy === "asc"){
      return a.rating - b.rating;
    }
     if(sortBy === "desc"){
      return b.rating - a.rating;
    }
     return 0;
  });

  


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

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 2,
          width: 1160,
          mx: "auto",
          alignItems: "center",
        }}
      >
        <TextField sx={{ flex: 3 }} value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Ürün Ara" variant="outlined" />
        <FormControl sx={{ flex: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Zorluk</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={zorluk}
            label="Zorluk"
            onChange={(e) => setZorluk(e.target.value)}
          >
            <MenuItem value={"All"}>Hepsi</MenuItem>
            <MenuItem value={"Easy"}>Kolay</MenuItem>
            <MenuItem value={"Medium"}>Orta</MenuItem>
          </Select>
        </FormControl>
         <FormControl sx={{ flex: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Puan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Puan"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value={"All"}>Hepsi</MenuItem>
            <MenuItem value={"asc"}>Azdan - Çoğa</MenuItem>
            <MenuItem value={"desc"}>Çoktan - Aza</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          mt: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredRecipes.length === 0 ? (
          <Typography align="center" variant="h6">
            Ürün bulunamadı
          </Typography>
        ) : (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))
        )}
      </Stack>
    </Container>
  );
}

export default Recipes;