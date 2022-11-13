import { useState } from 'react'
import { Button } from 'react-bootstrap'

function DetailsLeft ({ cocktail, attribution, onCocktailDelete }){
    const [deleted, setDeleted] = useState(false)
    const formatAttribution = attribution.join(", ")

    function handleDeletedCocktail(){
        onCocktailDelete(cocktail)
        setDeleted(!deleted)
    }

    return(
        <div className="details">
            <img id="details-img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p id="details-attribution">{formatAttribution}</p>
            {!deleted ? <Button variant='dark' onClick={handleDeletedCocktail} value="Delete">Delete Cocktail</Button> : <sub id="delete-message">&nbsp;&nbsp;&nbsp;&nbsp;Cocktail Deleted</sub>}
        </div>
    )
}

export default DetailsLeft