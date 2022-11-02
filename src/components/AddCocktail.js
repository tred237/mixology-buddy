import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ingredients from './Ingredients';

function AddCocktail({ ingredients }){
    return(
        <Form>
            <Form.Group className="mb-3">
                <Button variant="dark" type="submit">Submit</Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Name</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Thumbnail</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image thumbnail" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Source</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image source" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Credit</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image URL" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Creative Commons Confirmed</Form.Label>
                <Form.Select>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </Form.Select>
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