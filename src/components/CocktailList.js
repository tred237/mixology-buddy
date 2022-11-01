import CocktailCard from './CocktailCard'

function CocktailList({ cocktails, onCocktailDelete }) {
    return(
        <div>
            <h2>Cocktail List</h2>
            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail} onCocktailDelete={onCocktailDelete} />)}
        </div>
    )
}

export default CocktailList