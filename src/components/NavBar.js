import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink to="/" activeClassName="selected">
                Home
            </NavLink> 
            <br/>
            <NavLink to="/addCocktail" activeClassName="selected">
                Add A Cocktail
            </NavLink>
        </div>
    )
}

export default NavBar