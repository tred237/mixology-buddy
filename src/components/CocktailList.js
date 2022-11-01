import CocktailCard from './CocktailCard'

function CocktailList({ cocktails }) {
    return(
        <div>
            <h2>Cocktail List</h2>
            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} />)}
        </div>
    )
}

export default CocktailList