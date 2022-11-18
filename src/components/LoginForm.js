import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Login({ setLoggedIn }){
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    function handleChange(e){
        setLoginFormData({...loginFormData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setLoggedIn(true)
        history.push('/')
    }

    return(
        <Form className="form" id="login-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Username *</Form.Label>
                <Form.Control required type="text" placeholder="Enter username" name="username" value={loginFormData.username} onChange={handleChange} />
            </Form.Group>  
            <Form.Group className="mb-4">
                <Form.Label>Password *</Form.Label>
                <Form.Control required type="password" placeholder="Enter password" name="password" value={loginFormData.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Button variant="dark" type="submit">Log In</Button>
            </Form.Group>
        </Form>
    )
}

export default Login