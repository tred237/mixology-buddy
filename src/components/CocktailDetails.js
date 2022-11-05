import { useState, useEffect } from "react";

import CocktailIngredientsList from "./CocktailIngredientsList";

function CocktailDetails({ ingredientKeys }){
    const [cocktail, setCocktail] = useState([])
    const [attribution, setAttribution] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cocktails/8')
        .then(res => res.json())
        .then(data => {
            setCocktail(data)
            setAttribution([data.strImageSource, data.strImageAttribution, `Creative Commons Confirmed: ${data.strCreativeCommonsConfirmed}`].filter(element => element))

        })
    },[])

    const formatAttribution = attribution.join(", ")

    return(
        <div id="cocktail-details-container">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p><i><sub>{formatAttribution}</sub></i></p>
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strInstructions}</p>
            <ul>
                {ingredientKeys.map(ingredientKey => {
                    if(cocktail[ingredientKey]) return <CocktailIngredientsList key={ingredientKey} 
                                                                                ingredient={cocktail[ingredientKey]} 
                                                                                measurement={cocktail[`strMeasure${ingredientKey.split('strIngredient')[1]}`]} />
                })}
            </ul>
        </div>
    )
}

export default CocktailDetails