import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink to="/" activeClassName="selected">
                Home
            </NavLink> 
            <br/>
            <NavLink to="/add-a-cocktail" activeClassName="selected">
                Add A Cocktail
            </NavLink>
        </div>
    )
}

export default NavBar