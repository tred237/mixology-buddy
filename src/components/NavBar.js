import { NavLink, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function NavBar({ loggedIn, setLoggedIn }){
  const history = useHistory()

  function handleLogout(){
    setLoggedIn(false)
    history.push('/login')
  }
    return(
        <div id="nav-container">
            <h3>Mixology Buddy</h3>
            <div hidden={!loggedIn ? true : false} id="nav-buttons">
              <NavLink className="nav-button" to="/" >
                  Home
              </NavLink> 
              <NavLink className="nav-button" to="/add-a-cocktail" >
                  Add A Cocktail
              </NavLink>
              <Button id="logout-button" variant="dark" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default NavBar

// import { useHistory } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'

// function NavBar({ loggedIn, setLoggedIn }){
//     const history = useHistory()

//     function handleLogout(){
//       setLoggedIn(false)
//       history.push('/login')
//     }


//     return(
//         <Navbar variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand id="nav-brand">Mixology Buddy</Navbar.Brand> 
//           {/* <Navbar.Toggle />
//           <Navbar.Collapse> */}
//           <Nav>
//             <Nav.Item>
//               <Nav.Link href="/">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="add-a-cocktail">Add A Cocktail</Nav.Link>
//             </Nav.Item>
//             {/* <Button onClick={handleLogout}>Log Out</Button> */}
//           </Nav>
//           {/* </Navbar.Collapse> */}
//         </Container>
//       </Navbar>
//     )
// }

// export default NavBar