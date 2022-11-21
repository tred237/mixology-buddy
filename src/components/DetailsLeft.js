import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

function DetailsLeft ({ cocktail, attribution, onCocktailDelete, onLikeCocktails, onLikeDetails }){
    const [deleted, setDeleted] = useState(false)
    const formatAttribution = attribution.join(", ")

    function handleLikedCocktail(){
        fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({strLikes: cocktail.strLikes + 1})
        })
        .then(res => res.json())
        .then(data => {
            onLikeCocktails(data)
            onLikeDetails(data.strLikes)
        })
    }

    function handleDeletedCocktail(){
        onCocktailDelete(cocktail)
        setDeleted(!deleted)
    }

    return(
        <div className="details">
            <img id="details-img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p id="details-attribution">{formatAttribution}</p>
            <div id="button-container">
            {!deleted ? <Button variant='dark' onClick={handleDeletedCocktail} value="Delete">Delete Cocktail</Button> : <Redirect to='/' />}
            {' '}
            <Button variant='dark' onClick={handleLikedCocktail} value="Like">{`${cocktail.strLikes} Likes`}</Button>
            </div>
        </div>
    )
}

export default DetailsLeft