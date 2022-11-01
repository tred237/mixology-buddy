import { useState, useEffect } from 'react'
import CocktailList from './CocktailList'
import NavBar from './NavBar'
import AddCocktail from './AddCocktail'

function App() {
  const [cocktailData, setCocktailData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cocktails')
    .then(res => res.json())
    .then(data => setCocktailData(data))
  },[])

  function handleCocktailDelete(id){
    const newCocktailList = cocktailData.filter(element => element.id !== id)
    setCocktailData(newCocktailList)
  }

  return (
    <div>
      <h1>Mixology Buddy</h1>
      <NavBar />
      <AddCocktail />
      <CocktailList cocktails={cocktailData} onCocktailDelete={handleCocktailDelete}/>
    </div>
  )
}

export default App;
