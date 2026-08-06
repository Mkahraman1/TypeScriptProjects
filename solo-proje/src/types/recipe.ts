export type Recipe = {
    id:number,
    name:string,
    ingredients:string[],
    instructions:string[],
    prepTimeMinutes:number,
    cookTimeMinutes:number,
    difficulty:string,
    cuisine:string,
    caloriesPerServing:number,
    rating:number,
    image:string,
    mealtype:string[]
}