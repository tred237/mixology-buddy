import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IngredientsFormElement from './IngredientsFormElement';

function NewCocktailForm({ ingredients, onCocktailSubmit }){
    const formDataDefault = {
        strDrink: '',
        strDrinkThumb: '',
        strInstructions: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strMeasure1: '' ,
        strMeasure2: '' ,
        strMeasure3: '' ,
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strImageSource: '',
        strImageAttribution: '',
        strCreativeCommonsConfirmed: 'No'  
    }
    const [formData, setFormData] = useState({...formDataDefault})

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmitClick(e){
        e.preventDefault()
        const newCocktail = {...formData}
        
        fetch('http://localhost:3000/cocktails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCocktail)
        })
        .then(res => res.json())
        .then(data => onCocktailSubmit(data))

        setFormData({...formDataDefault})
    }

    return(
        <>
        <h5>Add your favorite cocktail!</h5>
            <Form className="form" onSubmit={handleSubmitClick} >
                <Form.Group className="mb-4">
                    <Button variant="dark" type="submit">Submit</Button>
                </Form.Group>
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
                {ingredients.map(ingredient => <IngredientsFormElement key={ingredient} ingredient={ingredient} formData={formData} handleChange={handleChange}/>)}
                <Form.Group className="mb-4">
                    <Button variant="dark" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default NewCocktailForm