import NavBarLoggedIn from './NavBarLoggedIn'

function NavBar({ loggedIn, setLoggedIn }){
    return(
        <>
            {loggedIn ? <NavBarLoggedIn setLoggedIn={setLoggedIn} /> : <h3 id="logout-title">Mixology Buddy</h3>}
        </>
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