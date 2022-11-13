import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './LoginForm'
import CocktailList from './CocktailList'
import NavBar from './NavBar'
import NewCocktailForm from './NewCocktailForm'
import CocktailDetails from './CocktailDetails'

function App() {
  const [cocktailData, setCocktailData] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
    .then(res => res.json())
    .then(data => {
      setCocktailData(data)

      const ingredientKeys = Object.keys(data[0]).filter(key => key.includes('strIngredient'))
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

  return (
    <div>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route exact path="/login">
          <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <Route exact path="/add-a-cocktail">
          <NewCocktailForm loggedIn={loggedIn} cocktails={cocktailData} ingredients={ingredients} onCocktailSubmit={handleCocktailSubmit} />
        </Route>
        <Route exact path="/:drinkId">
          <CocktailDetails ingredientKeys={ingredients} onCocktailDelete={handleDeleteClick} />
        </Route>
        <Route exact path="/">
          <CocktailList cocktails={cocktailData} loggedIn={loggedIn} onCocktailDelete={handleDeleteClick}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
