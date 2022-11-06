import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CocktailCard from './CocktailCard'

function CocktailList({ cocktails, onCocktailDelete }) {
    return(
        <div id='card-list-container'>
            <h2>Cocktail List</h2>
            <Row md={3}>
                {cocktails.map(cocktail => {
                   return( <Col className='col'>
                            <CocktailCard key={cocktail.id} cocktail={cocktail} onCocktailDelete={onCocktailDelete} />
                           </Col>)
                })}
            </Row>
        </div>
    )
}

export default CocktailList