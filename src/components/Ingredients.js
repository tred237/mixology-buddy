import Form from 'react-bootstrap/Form';

function Ingredients() {
    return(
        <Form.Group className="mb-3">
            <Form.Label>Ingedient</Form.Label>
            <Form.Control type="text" placeholder="Enter ingredient" />
        </Form.Group>
    )
}

export default Ingredients