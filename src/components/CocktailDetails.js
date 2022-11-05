import { useState, useEffect } from "react";

import CocktailIngredientsList from "./CocktailIngredientsList";

function CocktailDetails({ ingredientKeys }){
    const [cocktail, setCocktail] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cocktails/1')
        .then(res => res.json())
        .then(data => setCocktail(data))
    },[])

    return(
        <div id="cocktail-details-container">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p><i><sub>{`${cocktail.strImageSource}, ${cocktail.strImageAttribution}, ${cocktail.strCreativeCommonsConfirmed}`}</sub></i></p>
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strInstructions}</p>
            <ul>
                {ingredientKeys.map(ingredientKey => {
                    if(cocktail[ingredientKey] !== null) return <CocktailIngredientsList key={ingredientKey} 
                                                                                         ingredient={cocktail[ingredientKey]} 
                                                                                         measurement={cocktail[`strMeasure${ingredientKey.split('strIngredient')[1]}`]} />
                })}
            </ul>
        </div>
    )
}

export default CocktailDetails