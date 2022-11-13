import { useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function CocktailCard({ cocktail, onCocktailDelete }){
    const history = useHistory()

    // function handleDeleteClick(e){
    //     fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(cocktail)
    //     })
    //     .then(res => res.json())
    //     .then(() => onCocktailDelete(cocktail.id))
    // }

    return(
        <Card>
            <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <Card.Body>
                <Card.Text>{cocktail.strDrink}</Card.Text>
                <Button variant='dark' onClick={() => history.push(`/${cocktail.id}`)}>Details</Button> <Button variant='dark' onClick={() => onCocktailDelete(cocktail)} value="Delete">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CocktailCard