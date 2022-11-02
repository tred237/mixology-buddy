import { useState, useEffect } from 'react'
import CocktailList from './CocktailList'
import NavBar from './NavBar'
import AddCocktail from './AddCocktail'

function App() {
  const [cocktailData, setCocktailData] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
    .then(res => res.json())
    .then(data => {
      setCocktailData(data)

      const ingredientKeys = Object.keys(data[0]).filter(key => key.includes('strIngredient'))
      setIngredients(ingredientKeys)
    })
  },[])

  function handleCocktailDelete(id){
    const newCocktailList = cocktailData.filter(element => element.id !== id)
    setCocktailData(newCocktailList)
  }

  function handleCocktailSubmit(cocktail){
    setCocktailData([...cocktailData, cocktail])
  }

  return (
    <div>
      <h1>Mixology Buddy</h1>
      <NavBar />
      <AddCocktail cocktails={cocktailData} ingredients={ingredients} onCocktailSubmit={handleCocktailSubmit} />
      <CocktailList cocktails={cocktailData} onCocktailDelete={handleCocktailDelete}/>
    </div>
  )
}

export default App;
