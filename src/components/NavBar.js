import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar(){
    return(
        <div id="nav-container">
            <h3>Mixology Buddy</h3>
            <div id="nav-buttons">
                <NavLink className="nav-button" to="/" >
                    Home
                </NavLink> 
                <NavLink className="nav-button" to="/add-a-cocktail" >
                    Add A Cocktail
                </NavLink>
                <NavLink className="nav-button" to="/popular-cocktails">
                    Popular Cocktails
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar