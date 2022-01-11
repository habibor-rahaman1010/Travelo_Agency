import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Registration.css'

const Registration = () => {

    const registrationClickHandler = (e) => {
        e.preventDefault()
        console.log('hello')
    }
    return (
        <div className='container p-5'>
            <h4 className='text-center p-3 registrationText' >Registration Now!</h4>
            <Form onSubmit={registrationClickHandler} className='w-50 m-auto px-5 registration'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

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
                    Registration Now
                </Button>
            </Form>
        </div>
    );
};

export default Registration;