import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ingredients from './Ingredients';

function AddCocktail({ ingredients }){
    const ingredientsArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Name</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image URL" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Instructions</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail instructions" />
            </Form.Group>
            {ingredients.map(element => <Ingredients key={element} />)}
        </Form>
    )
}

export default AddCocktail