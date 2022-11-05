import { useState, useEffect } from "react";

import CocktailIngredientsList from "./CocktailIngredientsList";

function CocktailDetails(){
    const [cocktail, setCocktail] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cocktails/1')
        .then(res => res.json())
        .then(data => setCocktail(data))
    },[])

    console.log(cocktail)

    return(
        <div id="cocktail-details-container">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strInstructions}</p>
            <ul>
                {/* {} */}
            </ul>
        </div>
    )
}

export default CocktailDetails