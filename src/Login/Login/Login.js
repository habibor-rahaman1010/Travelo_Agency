import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const loginClickHandler = (e) => {
        e.preventDefault()
        console.log('hello')
    }
    return (
        <div className='container p-5'>
            <h4 className='text-center p-3 loginText' >Login Now!</h4>
            <Form onSubmit={loginClickHandler} className='w-50 m-auto px-5 login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit">
                    Login Now
                </Button>
            </Form>
        </div>
    );
};

export default Login;