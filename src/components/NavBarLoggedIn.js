import { NavLink, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBarButtons({ setLoggedIn }) {
    const history = useHistory()

    function handleLogout(){
      setLoggedIn(false)
      history.push('/login')
    }
    
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
                <Button variant="dark" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default NavBarButtons