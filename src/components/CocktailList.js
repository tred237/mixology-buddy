import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Redirect } from 'react-router-dom'

import CocktailCard from './Card'

function CocktailList({ cocktails, loggedIn, onCocktailDelete }) {
    if(loggedIn === false) return <Redirect to='/login' />

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