import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    const userLogin = async () =>{
        try{
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: username,
                password: password
              })
              const token:string = response.data.token
              sessionStorage.setItem('JWT',token)
              console.log(response)

        }catch(err){
            console.log("login unsuccesful:", err)
        }
    }

    const handleLogin = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        userLogin()
        navigate('/info')
    }

  return (
      <>
      <h1>Login</h1>
      <Container>

      <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange = {(event) => setUsername(event.target.value)} value={username}/>
        <Form.Text className="text-muted">
          Enter a Username and Password for <a href="https://dummyjson.com/users">fakestore dummyJSON</a>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange = {(event) => setPassword(event.target.value)} value={password}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
      </Container>
      </>
  )
}

export default Login