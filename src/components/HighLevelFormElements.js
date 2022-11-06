import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HighLevelFormElements({ formData, handleChange }){
    return(
        <>
            <Form.Group className="mb-4">
                <Row md={3}>
                    <Col>
                        <Form.Label>Cocktail Name *</Form.Label>
                        <Form.Control required type="text" placeholder="Enter name" name="strDrink" value={formData.strDrink} onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Cocktail Thumbnail *</Form.Label>
                        <Form.Control required type="text" placeholder="Enter image thumbnail" name="strDrinkThumb" value={formData.strDrinkThumb} onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Cocktail Image Source *</Form.Label>
                        <Form.Control required type="text" placeholder="Enter image source" name="strImageSource" value={formData.strImageSource} onChange={handleChange} />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-4">
                <Row md={3}>
                    <Col>
                        <Form.Label>Cocktail Image Credit</Form.Label>
                        <Form.Control type="text" placeholder="Enter image URL" name="strImageAttribution" value={formData.strImageAttribution} onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Image Creative Commons Confirmed</Form.Label>
                        <Form.Select name="strCreativeCommonsConfirmed" onChange={handleChange}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Cocktail Instructions *</Form.Label>
                        <Form.Control required type="text" placeholder="Enter instructions" name="strInstructions" value={formData.strInstructions} onChange={handleChange} />
                    </Col>
                </Row>
            </Form.Group>
        </>
    )
}

export default HighLevelFormElements