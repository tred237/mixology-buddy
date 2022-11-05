import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import CocktailList from './CocktailList'
import NavBar from './NavBar'
import AddCocktail from './AddCocktail'
import CocktailDetails from './CocktailDetails'

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
      <Switch>
        <Route path="/addCocktail">
          <AddCocktail cocktails={cocktailData} ingredients={ingredients} onCocktailSubmit={handleCocktailSubmit} />
        </Route>
        <Route path="/details/:drinkId">
          <CocktailDetails ingredientKeys={ingredients} />
        </Route>
        <Route path="/">
          <CocktailList cocktails={cocktailData} onCocktailDelete={handleCocktailDelete}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
