import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import CocktailIngredientsList from "./CocktailIngredientsList";

function CocktailDetails({ ingredientKeys }){
    const [cocktail, setCocktail] = useState([])
    const [attribution, setAttribution] = useState([])
    const {drinkId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/cocktails/${drinkId}`)
        .then(res => res.json())
        .then(data => {
            setCocktail(data)
            setAttribution([data.strImageSource, data.strImageAttribution, `Creative Commons Confirmed: ${data.strCreativeCommonsConfirmed}`].filter(element => element))
        })
    },[drinkId])

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
                    return true
                })}
            </ul>
        </div>
    )
}

export default CocktailDetails