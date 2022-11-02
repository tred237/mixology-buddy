import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ingredients from './Ingredients';
import { useState } from 'react'

function AddCocktail({ ingredients, onCocktailSubmit }){
    const [formData, setFormData] = useState({
        name: '',
        imgThumbnail: '',
        imgSource: '',
        imgCredit: '',
        imgCreativeCommons: 'No',
        instructions: '',
        ingredient1: '',
        measurement1: '',
        ingredient2: '',
        measurement2: '',
        ingredient3: '',
        measurement3: '',
        ingredient4: '',
        measurement4: '',
        ingredient5: '',
        measurement5: '',
        ingredient6: '',
        measurement6: '',
        ingredient7: '',
        measurement7: '',
        ingredient8: '',
        measurement8: '',
        ingredient9: '',
        measurement9: '',
        ingredient10: '',
        measurement10: '',
        ingredient11: '',
        measurement11: '',
        ingredient12: '',
        measurement12: '',
        ingredient13: '',
        measurement13: '',
        ingredient14: '',
        measurement14: '',
        ingredient15: '',
        measurement15: ''
    })

    const emptyFormDataObj = {...formData}

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
    }

    return(
        <Form onSubmit={handleSubmitClick}>
            <Form.Group className="mb-3">
                <Button variant="dark" type="submit">Submit</Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Name</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail name" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Thumbnail</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image thumbnail" name="imgThumbnail" value={formData.imgThumbnail} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Source</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image source" name="imgSource" value={formData.imgSource} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Credit</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail image URL" name="imgCredit" value={formData.imgCredit} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Image Creative Commons Confirmed</Form.Label>
                <Form.Select name="imgCreativeCommons" onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cocktail Instructions</Form.Label>
                <Form.Control type="text" placeholder="Enter cocktail instructions" name="instructions" value={formData.instructions} onChange={handleChange} />
            </Form.Group>
            {ingredients.map(ingredient => <Ingredients key={ingredient} ingredient={ingredient} formData={formData} handleChange={handleChange}/>)}
        </Form>
    )
}

export default AddCocktail