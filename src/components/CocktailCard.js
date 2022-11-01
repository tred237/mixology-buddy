import { Card, Button } from 'react-bootstrap'

function CocktailCard(){
    return(
        <div>
            <Card className='card'>
                <Card.Img variant="top" src="test" alt="this image" />
                <Card.Body>
                    <Card.Text>
                        Text
                    </Card.Text>
                    <Button variant="light">Details</Button> <Button variant="light">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CocktailCard