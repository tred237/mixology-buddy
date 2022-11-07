function CocktailIngredientsList({ ingredient, measurement }){
    return(
        <li>{`${ingredient}, ${measurement}`}</li>
    )
}

export default CocktailIngredientsList