import NavBarLoggedIn from './NavBarLoggedIn'

function NavBar({ loggedIn, setLoggedIn }){
    return(
        <>
            {loggedIn ? <NavBarLoggedIn setLoggedIn={setLoggedIn} /> : <h3 id="logout-title">Mixology Buddy</h3>}
        </>
    )
}

export default NavBar