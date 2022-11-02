import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Ingredients({ ingredient, formData, validated, handleChange }) {
    const splitIngredient = ingredient.split('strIngredient')[1]
    
    return(
        <Form.Group className="mb-3" as={Col}>
            <Row>
                <Col>
                    <Form.Label>{splitIngredient === '1' ? 'Ingedient *' : 'Ingedient'}</Form.Label>
                    <Form.Control required={splitIngredient === '1' ? true : false} 
                                  type="text" 
                                  placeholder="Enter ingredient" 
                                  name={`ingredient${splitIngredient}`} 
                                  value={formData[`ingredient${splitIngredient}`]} 
                                  onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">Please enter an ingredient.</Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>{splitIngredient === '1' ? 'Measurement *' : 'Measurement'}</Form.Label>
                    <Form.Control required={splitIngredient === '1' ? true : false} 
                                  type="text" 
                                  placeholder="Enter measurement" 
                                  name={`measurement${splitIngredient}`} 
                                  value={formData[`measurement${splitIngredient}`]} 
                                  onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">Please enter a measurement for the cocktail ingredient.</Form.Control.Feedback>
                </Col>
            </Row>
        </Form.Group>
    )
}

export default Ingredients