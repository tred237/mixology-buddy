import CocktailIngredientsList from "./IngredientsList";

function DetailsRight({ cocktail, ingredientKeys, }) {
    return(
        <div className="details">
            <h4>{cocktail.strDrink}</h4>
            <p>{cocktail.strInstructions}</p>
            <ul>
                {ingredientKeys.map(ingredientKey => {
                    if(cocktail[ingredientKey]) return <CocktailIngredientsList key={ingredientKey} 
                                                                                ingredient={cocktail[ingredientKey]} 
                                                                                measurement={cocktail[`strMeasure${ingredientKey.split('strIngredient')[1]}`]} />
                    return true
                })}
            </ul>
        </div>
    )
}

export default DetailsRight