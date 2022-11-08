import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router-dom'

import HighLevelFormElements from './HighLevelFormElements'
import IngredientsFormElement from './IngredientsFormElement'

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
        <Form className="form" onSubmit={handleSubmitClick} >
            <h5 className="mb-4">Add your favorite cocktail!</h5>
            <Form.Group className="mb-4">
                <Button variant="dark" type="submit">Submit</Button>
            </Form.Group>
            <HighLevelFormElements formData={formData} handleChange={handleChange} />
            {ingredients.map(ingredient => <IngredientsFormElement key={ingredient} ingredient={ingredient} formData={formData} handleChange={handleChange}/>)}
            <Form.Group className="mb-4">
                <Button variant="dark" type="submit">Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default NewCocktailForm