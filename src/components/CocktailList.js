import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import CocktailCard from './Card'

function CocktailList({ cocktails, isPopular, onCocktailDelete }) {

    return(
        <div id='card-list-container'>
            <h5>{isPopular ? 'Popular Cocktails' : 'Cocktail List'}</h5>
            <Row md={3}>
                {cocktails.map(cocktail => {
                   return( <Col key={cocktail.id}>
                            <CocktailCard cocktail={cocktail} isPopular={isPopular} onCocktailDelete={onCocktailDelete} />
                           </Col>)
                })}
            </Row>
        </div>
    )
}

export default CocktailList