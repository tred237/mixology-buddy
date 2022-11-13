import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight';

function CocktailDetails({ ingredientKeys, onCocktailDelete }){
    const [cocktail, setCocktail] = useState([])
    const [attribution, setAttribution] = useState([])
    const {drinkId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/cocktails/${drinkId}`)
        .then(res => res.json())
        .then(data => {
            setCocktail(data)
            setAttribution([data.strImageSource, data.strImageAttribution, `Creative Commons Confirmed: ${data.strCreativeCommonsConfirmed}`].filter(element => element))
        })
    },[drinkId])

    return(
        <div id="cocktail-details-container">
            <Row md={2}>
                <Col className='col-details'>
                    <DetailsLeft cocktail={cocktail} attribution={attribution} onCocktailDelete={onCocktailDelete} />
                </Col>
                <Col className='col-details'>
                    <DetailsRight cocktail={cocktail} ingredientKeys={ingredientKeys} />
                </Col>
            </Row>
        </div>
    )
}

export default CocktailDetails