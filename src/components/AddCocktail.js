import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ingredients from './Ingredients';
import { useState } from 'react'

function AddCocktail({ ingredients, onCocktailSubmit }){
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
        <Form onSubmit={handleSubmitClick}>
            <Form.Group className="mb-3">
                <Button variant="dark" type="submit">Submit</Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Name *</Form.Label>
                <Form.Control required type="text" placeholder="Enter cocktail name" name="strDrink" value={formData.strDrink} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Thumbnail *</Form.Label>
                <Form.Control required type="text" placeholder="Enter cocktail image thumbnail" name="strDrinkThumb" value={formData.strDrinkThumb} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Source *</Form.Label>
                <Form.Control required type="text" placeholder="Enter cocktail image source" name="strImageSource" value={formData.strImageSource} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Credit</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image URL" name="strImageAttribution" value={formData.strImageAttribution} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Creative Commons Confirmed</Form.Label>
                <Form.Select name="strCreativeCommonsConfirmed" onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Instructions *</Form.Label>
                <Form.Control required type="text" placeholder="Enter cocktail instructions" name="strInstructions" value={formData.strInstructions} onChange={handleChange} />
            </Form.Group>
            {ingredients.map(ingredient => <Ingredients key={ingredient} ingredient={ingredient} formData={formData} handleChange={handleChange}/>)}
        </Form>
    )
}

export default AddCocktail