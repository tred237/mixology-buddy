import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import CocktailList from './CocktailList'
import NavBar from './NavBar'
import NewCocktailForm from './NewCocktailForm'
import CocktailDetails from './CocktailDetails'

function App() {
  const [cocktailData, setCocktailData] = useState([])
  // const [popularCocktails, setPopularCocktails] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
    .then(res => res.json())
    .then(data => {
      const ingredientKeys = Object.keys(data[0]).filter(key => key.includes('strIngredient'))
      setCocktailData(data)
      setIngredients(ingredientKeys)
    })
  },[])

  function handleDeleteClick(cocktail){
    fetch(`http://localhost:3000/cocktails/${cocktail.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cocktail)
    })
    .then(res => res.json())
    .then(() => {
      const newCocktailList = cocktailData.filter(element => element.id !== cocktail.id)
      setCocktailData(newCocktailList)
    })
  }

  function handleCocktailSubmit(cocktail){
    setCocktailData([...cocktailData, cocktail])
  }

  function handleLikeCocktails(cocktail){
    const updatedCocktails = cocktailData.map(element => {
      if(element.id === cocktail.id) element.strLikes = cocktail.strLikes
      return element
    })

    setCocktailData(updatedCocktails)
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/popular-cocktails">
          <CocktailList  cocktails={cocktailData} isPopular={true} onCocktailDelete={handleDeleteClick} />
        </Route>
        <Route exact path="/add-a-cocktail">
          <NewCocktailForm cocktails={cocktailData} ingredients={ingredients} onCocktailSubmit={handleCocktailSubmit} />
        </Route>
        <Route exact path="/:drinkId">
          <CocktailDetails ingredientKeys={ingredients} onCocktailDelete={handleDeleteClick} onLikeCocktails={handleLikeCocktails} />
        </Route>
        <Route exact path="/">
          <CocktailList cocktails={cocktailData} isPopular={false} onCocktailDelete={handleDeleteClick}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
