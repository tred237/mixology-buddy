// import { NavLink } from 'react-router-dom'

// function NavBar(){
//     return(
//         <div>
//             <NavLink to="/" activeClassName="selected">
//                 Home
//             </NavLink> 
//             <br/>
//             <NavLink to="/add-a-cocktail" activeClassName="selected">
//                 Add A Cocktail
//             </NavLink>
//         </div>
//     )
// }

// export default NavBar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar(){
    return(
        <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand id="nav-brand">Mixology Buddy</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add-a-cocktail">Add A Cocktail</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar