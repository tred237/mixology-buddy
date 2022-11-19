import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function CocktailCard({ cocktail, isPopular, onCocktailDelete }){
    const history = useHistory()

    return(
        <Card>
            <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <Card.Body>
                <Card.Text>{cocktail.strDrink}</Card.Text>
                <Button variant='dark' onClick={() => history.push(`/${cocktail.id}`)}>Details</Button>
                {' '}
                {!isPopular ? <Button variant='dark' onClick={() => onCocktailDelete(cocktail)} value="Delete">Delete</Button> : true}
            </Card.Body>
        </Card>
    )
}

export default CocktailCard