import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CocktailCard from './CocktailCard'

function CocktailList({ cocktails, onCocktailDelete }) {
    return(
        <div id='card-list-container'>
            <h5>Cocktail List</h5>
            <Row md={3}>
                {cocktails.map(cocktail => {
                   return( <Col key={cocktail.id}>
                            <CocktailCard cocktail={cocktail} onCocktailDelete={onCocktailDelete} />
                           </Col>)
                })}
            </Row>
        </div>
    )
}

export default CocktailList