import { Card, Button } from 'react-bootstrap'

function CocktailCard({ cocktail }){
    return(
        <div className='card-container'>
            <Card>
                <Card.Img variant="top" src={cocktail.strDrinkThumb} alt="this image" />
                <Card.Body>
                    <Card.Text>
                        {cocktail.strDrink}
                    </Card.Text>
                    <Button variant="light">Details</Button> <Button variant="light">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CocktailCard