import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CocktailIngredientsList from "./CocktailIngredientsList";

function CocktailDetails({ ingredientKeys }){
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

    const formatAttribution = attribution.join(", ")

    return(
        <div id="cocktail-details-container">
            <Row md={2}>
                <Col className='col-details'>
                    <div className="details">
                        <img id="details-img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p id="details-attribution">{formatAttribution}</p>
                    </div>
                </Col>
                <Col className='col-details'>
                    <div className="details">
                        <h4>{cocktail.strDrink}</h4>
                        <p>{cocktail.strInstructions}</p>
                        <ul>
                            {ingredientKeys.map(ingredientKey => {
                                if(cocktail[ingredientKey]) return <CocktailIngredientsList key={ingredientKey} 
                                                                                            ingredient={cocktail[ingredientKey]} 
                                                                                            measurement={cocktail[`strMeasure${ingredientKey.split('strIngredient')[1]}`]} />
                                return true
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CocktailDetails