import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Ingredients() {
    return(
        <Form.Group className="mb-3" as={Col}>
            <Row>
                <Col>
                    <Form.Label>Ingedient</Form.Label>
                    <Form.Control type="text" placeholder="Enter ingredient" />
                </Col>
                <Col>
                    <Form.Label>Measurement</Form.Label>
                    <Form.Control type="text" placeholder="Enter measurement" />
                </Col>
            </Row>
        </Form.Group>
    )
}

export default Ingredients