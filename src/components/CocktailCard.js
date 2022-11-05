import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CocktailCard({ cocktail, onCocktailDelete }){
    function handleDeleteClick(e){
        fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cocktail)
        })
        .then(res => res.json())
        .then(() => onCocktailDelete(cocktail.id))
    }

    return(
            <Card>
                <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <Card.Body>
                    <Card.Text>{cocktail.strDrink}</Card.Text>
                    <Button variant='dark'>Details</Button> <Button variant='dark' onClick={handleDeleteClick} value="Delete">Delete</Button>
                </Card.Body>
            </Card>
    )
}

export default CocktailCard