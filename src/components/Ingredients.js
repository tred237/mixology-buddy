import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Ingredients({ ingredient, formData, handleChange }) {
    const splitIngredient = ingredient.split('strIngredient')[1]
    
    return(
        <Form.Group className="mb-3" as={Col}>
            <Row>
                <Col>
                    <Form.Label>{splitIngredient === '1' ? 'Ingedient *' : 'Ingedient'}</Form.Label>
                    <Form.Control required={splitIngredient === '1' ? true : false} 
                                  type="text" 
                                  placeholder="Enter ingredient" 
                                  name={ingredient} 
                                  value={formData[ingredient]} 
                                  onChange={handleChange} />
                </Col>
                <Col>
                    <Form.Label>{splitIngredient === '1' ? 'Measurement *' : 'Measurement'}</Form.Label>
                    <Form.Control required={splitIngredient === '1' ? true : false} 
                                  type="text" 
                                  placeholder="Enter measurement" 
                                  name={`strMeasure${splitIngredient}`} 
                                  value={formData[`strMeasure${splitIngredient}`]} 
                                  onChange={handleChange} />
                </Col>
            </Row>
        </Form.Group>
    )
}

export default Ingredients